// Use the REST API to get the initial data for the class tables
function loadClasses() {
    fetch("/classes/sem/Fall")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"fall"));     // now the body is ready

    // Add a fetch call for the spring semester as well
    fetch("/classes/sem/Spring")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"spring"));     // now the body is ready
}

// display the classes being taught
function displayClasses(data,tableName) {

  // set up the table
  var table = document.getElementById(tableName);

  // clear existing content out--will need this for dynamic updates
  table.innerHTML = "";

  // loop through the data, creating rows (tr) and columns (td) for each row
  // and item returned by the database query

  for(var i=0; i<data.length; i++){
    var row = document.createElement('tr');
    //table.appendChild(row);
    //row.innerText = "john";
    var cell = document.createElement('td');
    //cell.innerHTML = "bruh";
    for (var x=0 in data[i]){
      var cell = document.createElement('td');
      var textNode = document.createTextNode(data[i][x]);
      cell.appendChild(textNode);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  console.log(data);

}


// update the database and the view in the UI
function createClass() {

  // Make sure all the hidden form variables are set properly
  updateTitleCredits();
  updateYear();

  // Get the form data
  var formData = new FormData(document.getElementById('class_form'));

  //send the code to your endpoint using POST to add new class and then
  //call loadClasses to reload the tables
  fetch("/classes"/*url of the endpoint*/,
  {
      method: 'POST'/*HTML method for sending data*/,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Object.fromEntries(formData))/* encode the form data as json*/,
  })
  .then(response => {   // first then checks if the response is ready and if it
    if(!response.ok) {  // is ok (200) or an error (500)
      // if response not ok, throw an error
      return response.text().then(text => {throw new Error(text) })
    }
    else {  // if the response is ok, then send it on to the next then
      return response.text() // use response.text because our POST returns a
    }                   // confirmation string
  })
  // prints out confirmation from DB and updates displayed tables
  .then(data => { console.log(data)/* print the data to the console*/; loadClasses()/* call load classes*/;})
  // catch the error that occurred and print to the console
  .catch(error => { console.error('Error:', error)});


  // make sure to do this! Otherwise the page will reload rather than the table
  // updating dynamically
  return false;
}

// when id_title is changed, update the title and credits from the attributes in the select
function updateTitleCredits() {

  const id_title = document.getElementById("id");

  // get the value of the first form element
  document.getElementById("title").value = id_title.options[id_title.selectedIndex].getAttribute("data-title");
  document.getElementById("credits").value = id_title.options[id_title.selectedIndex].getAttribute("data-credits");
}

// when sem_year is changed, update the year from the attributes in the select
function updateYear() {

  const sem_year = document.getElementById("semester");

  // get the value of the first form element
  document.getElementById("year").value = sem_year.options[sem_year.selectedIndex].getAttribute("data-year");
}
