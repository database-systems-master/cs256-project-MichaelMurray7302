
const hamburger = document.querySelector(".hamburger"); // the hamburger button
const navMenu = document.querySelector(".nav-menu");    // the navigation menu
const navLink = document.querySelectorAll(".nav-link"); // array of all of the links in the nav menu
const darkmode = document.querySelector(".dark-mode");
const body = document.body;
const h1 = document.querySelector("h1");
const h3 = document.getElementsByTagName("h3");
const h6 = document.querySelector("h6");

// Add an event listener so the hamburger calls openMenu when it is clicked

// Your code here!
hamburger.addEventListener("click", toggleActive);




// function to open the navigation menu
// this needs to add/remove the class "active" for both the hamburger and navMenu
// elements so that the hamburger will switch to an X and the navMenu will
// slide out, or the hamburger will go back to a burger and the menu will slide in
function toggleActive() {
    // Your code here!
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

}



// Add an event listener FOR EACH navigation link so the menu will close
// when it is clicked

// Your code here!
for (var i=0; i,navLink.length; i++){
  navLink[i].addEventListener("click", closeMenu);
}




// function to close the navigation nav
// this needs to remove the class "active" from both hamburger and navMenu
function closeMenu() {

  // Your code here!
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
