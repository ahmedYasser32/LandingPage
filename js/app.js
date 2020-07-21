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

const NavList =document.getElementById("navbar__list");
const sections= document.querySelectorAll('section');


/**
 * End Global Variables

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
        newli.id=secID;
        newli.innerHTML=`<a href="#${secID}">${secID}</a>`;
        LFrag.appendChild(newli);

        //scroll into the wanted element
        newli.addEventListener('click',function(e){
            e.preventDefault();
            sec.scrollIntoView({
                behavior:"smooth"

            });
        });


        NavList.appendChild(LFrag);


    }
}

//build the event to know when the user is on top of viewport and control the active  class
function buildevents() {
    for (let i=0;i<sections.length;i++){
      let  section=sections[i];
      let link = document.getElementById(section.id);
        const entry = Math.floor(section.getBoundingClientRect().top);

        section.classList.toggle('your-active-class',false)
        link.classList.toggle('your-active-class',false);

        if (entry <280 && entry >= -280){
            section.classList.toggle('your-active-class',true);
            link.classList.toggle('your-active-class',true);

        }
    }
}
/**
 * End Main Functions
 * Begin Events
 *
 */
// Build navigation menu
document.addEventListener('DOMContentLoaded', (buildnavBar()));
//begin the events that set and remove active class and know which class you are scrolling on
window.addEventListener("scroll", buildevents);








