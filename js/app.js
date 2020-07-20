/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const Navmenu = document.getElementsByClassName("navbar__menu");
const NavList =document.getElementById("navbar__list");
const sections= document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
 function buildnavBar() {

 const LFrag = document.createDocumentFragment();
 for (const sec of sections) {
  const secID = sec.id;
  const newli = document.createElement('li');
  newli.classList.add("menu__link");
  newli.innerHTML=`<a href="#${secID}">${secID}</a>`;
  LFrag.appendChild(newli);
  //scroll into the wanted element
  newli.addEventListener('click',function(e){
   e.preventDefault();
   sec.scrollIntoView({
    behavior:"smooth"
   });
  });
  // Scroll to section on link click

  NavList.appendChild(LFrag);


 }
}

 //build the event
function buildevents() {
 sections.forEach(section => {
  section.addEventListener('mouseover', event => {
   //handle click
// Add class 'active' to section when near top of viewport
   section.classList.toggle("your-active-class");

  })
 });
 sections.forEach(section => {
  section.addEventListener('mouseout', event => {
   //handle click
// Add class 'active' to section when near top of viewport
   section.classList.toggle("your-active-class");

  })
 });
 }





// Scroll to anchor ID using scrollTO event
function scrollto(){

}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build navigation menu
document.addEventListener('DOMContentLoaded', (buildnavBar()));
//begin the events that set and remove active class
buildevents();






