// Use the REST API to get the initial data for the project tables
function loadProject() {
    fetch("/project.movie")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"movie"));     // now the body is ready

    fetch("/project.starsIn")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"actor"));     // now the body is ready

    fetch("/project.directs")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"director"));     // now the body is ready

    fetch("/project.productionCompany")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"productionCompany"));     // now the body is ready

    fetch("/project.writes")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"writers"));     // now the body is ready

}

//SpiderMan
function loadSpiderMan() {
    fetch("/project.movie/SpiderMan")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"movie"));     // now the body is ready

    fetch("/project.starsIn/SpiderMan")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"actor"));     // now the body is ready

    fetch("/project.directs/SpiderMan")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"director"));     // now the body is ready

    fetch("/project.productionCompany/SpiderMan")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"productionCompany"));     // now the body is ready

    fetch("/project.writes/SpiderMan")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"writers"));     // now the body is ready

}

//SpiderMan2
function loadSpiderMan2() {
    fetch("/project.movie/SpiderMan2")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"movie"));     // now the body is ready

    fetch("/project.starsIn/SpiderMan2")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"actor"));     // now the body is ready

    fetch("/project.directs/SpiderMan2")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"director"));     // now the body is ready

    fetch("/project.productionCompany/SpiderMan2")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"productionCompany"));     // now the body is ready

    fetch("/project.writes/SpiderMan2")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"writers"));     // now the body is ready



}

//SpiderMan3
function loadSpiderMan3() {
    fetch("/project.movie/SpiderMan3")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"movie"));     // now the body is ready

    fetch("/project.starsIn/SpiderMan3")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"actor"));     // now the body is ready

    fetch("/project.directs/SpiderMan3")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"director"));     // now the body is ready

    fetch("/project.productionCompany/SpiderMan3")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"productionCompany"));     // now the body is ready

    fetch("/project.writes/SpiderMan3")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"writers"));     // now the body is ready

}

//SpiderMan: Trilogy
function loadSpiderManTrilogy() {
    fetch("/project.movie/SpiderManTrilogy")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"movie"));     // now the body is ready

    fetch("/project.starsIn/SpiderManTrilogy")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"actor"));     // now the body is ready

    fetch("/project.directs/SpiderManTrilogy")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"director"));     // now the body is ready

    fetch("/project.productionCompany/SpiderManTrilogy")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"productionCompany"));     // now the body is ready

    fetch("/project.writes/SpiderManTrilogy")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"writers"));     // now the body is ready

}

//Brothers
function loadBrothers() {
    fetch("/project.movie/Brothers")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"movie"));     // now the body is ready

    fetch("/project.starsIn/Brothers")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"actor"));     // now the body is ready

    fetch("/project.directs/Brothers")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"director"));     // now the body is ready

    fetch("/project.productionCompany/Brothers")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"productionCompany"));     // now the body is ready

    fetch("/project.writes/Brothers")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"writers"));     // now the body is ready

}

//Jumper
function loadJumper() {
    fetch("/project.movie/Jumper")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"movie"));     // now the body is ready

    fetch("/project.starsIn/Jumper")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"actor"));     // now the body is ready

    fetch("/project.directs/Jumper")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"director"));     // now the body is ready

    fetch("/project.productionCompany/Jumper")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"productionCompany"));     // now the body is ready

    fetch("/project.writes/Jumper")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"writers"));     // now the body is ready

}

//Lighthouse
function loadTheLighthouse() {
    fetch("/project.movie/TheLighthouse")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"movie"));     // now the body is ready

    fetch("/project.starsIn/TheLighthouse")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"actor"));     // now the body is ready

    fetch("/project.directs/TheLighthouse")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"director"));     // now the body is ready

    fetch("/project.productionCompany/TheLighthouse")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"productionCompany"));     // now the body is ready

    fetch("/project.writes/TheLighthouse")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"writers"));     // now the body is ready

}

//Starwars 1
function loadI() {
    fetch("/project.movie/I")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"movie"));     // now the body is ready

    fetch("/project.starsIn/I")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"actor"));     // now the body is ready

    fetch("/project.directs/I")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"director"));     // now the body is ready

    fetch("/project.productionCompany/I")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"productionCompany"));     // now the body is ready

    fetch("/project.writes/I")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"writers"));     // now the body is ready

}

// Starwars 2
function loadII() {
    fetch("/project.movie/II")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"movie"));     // now the body is ready

    fetch("/project.starsIn/II")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"actor"));     // now the body is ready

    fetch("/project.directs/II")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"director"));     // now the body is ready

    fetch("/project.productionCompany/II")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"productionCompany"));     // now the body is ready

    fetch("/project.writes/II")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"writers"));     // now the body is ready

}
// Starwars 3
function loadIII() {
    fetch("/project.movie/III")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"movie"));     // now the body is ready

    fetch("/project.starsIn/III")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"actor"));     // now the body is ready

    fetch("/project.directs/III")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"director"));     // now the body is ready

    fetch("/project.productionCompany/III")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"productionCompany"));     // now the body is ready

    fetch("/project.writes/III")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"writers"));     // now the body is ready

}

function loadPrequels() {
    fetch("/project.movie/Prequels")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"movie"));     // now the body is ready

    fetch("/project.starsIn/Prequels")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"actor"));     // now the body is ready

    fetch("/project.directs/Prequels")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"director"));     // now the body is ready

    fetch("/project.productionCompany/Prequels")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"productionCompany"));     // now the body is ready

    fetch("/project.writes/Prequels")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"writers"));     // now the body is ready

}

function loadSJ() {
    fetch("/project.movie/SJ")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"movie"));     // now the body is ready

    fetch("/project.starsIn/SJ")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"actor"));     // now the body is ready

    fetch("/project.directs/SJ")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"director"));     // now the body is ready

    fetch("/project.productionCompany/SJ")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"productionCompany"));     // now the body is ready

    fetch("/project.writes/SJ")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"writers"));     // now the body is ready

}

function loadfifty() {
    fetch("/project.movie/fifty")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"movie"));     // now the body is ready

    fetch("/project.starsIn/fifty")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"actor"));     // now the body is ready

    fetch("/project.directs/fifty")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"director"));     // now the body is ready

    fetch("/project.productionCompany/fifty")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"productionCompany"));     // now the body is ready

    fetch("/project.writes/fifty")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"writers"));     // now the body is ready

}

function loadBestRT() {
    fetch("/project.movie/RT")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"movie"));     // now the body is ready

    fetch("/project.starsIn/RT")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"actor"));     // now the body is ready

    fetch("/project.directs/RT")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"director"));     // now the body is ready

    fetch("/project.productionCompany/RT")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"productionCompany"));     // now the body is ready

    fetch("/project.writes/RT")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"writers"));     // now the body is ready

}

function loadBestIMDB() {
    fetch("/project.movie/IMDB")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"movie"));     // now the body is ready

    fetch("/project.starsIn/IMDB")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"actor"));     // now the body is ready

    fetch("/project.directs/IMDB")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"director"));     // now the body is ready

    fetch("/project.productionCompany/IMDB")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"productionCompany"));     // now the body is ready

    fetch("/project.writes/IMDB")
    .then(response => response.json())  // body is not quite ready yet
    .then(data => displayClasses(data,"writers"));     // now the body is ready

}

// display the project data
function displayClasses(data,tableName) {

  // set up the table
  var table = document.getElementById(tableName);

  // clear existing content out--will need this for dynamic updates
  table.innerHTML = "";

  // loop through the data, creating rows (tr) and columns (td) for each row
  // and item returned by the database query

  for(var i=0; i<data.length; i++){
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    for (var x=0 in data[i]){
      if (i == 0) {
        var header = document.createElement('th');
        var textNode1 = document.createTextNode(x);
        header.appendChild(textNode1);
        row.appendChild(header);
        table.appendChild(header);
      }
      var cell = document.createElement('td');
      var textNode = document.createTextNode(data[i][x]);
      cell.appendChild(textNode);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  console.log(data);
}
