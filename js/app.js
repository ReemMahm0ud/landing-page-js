/**
 * Define Global Variables
 * 
 */
const navbar = document.querySelector('ul');
const sections = document.querySelectorAll('section');
const navList = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();



/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

const removeClass = function (elements, className) {
    elements.forEach(function (element) {
        element.classList.remove(className);
    });

};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */


// build the nav
const buildNav = function () {
    sections.forEach(function (section) {
        const dataName = section.getAttribute('data-nav');
        const idName = section.getAttribute('id');
        const anchor = document.createElement('a');
        const listItem = document.createElement('li');

        anchor.textContent = dataName;
        anchor.setAttribute('href', `#${idName}`);
        anchor.classList.add('menu__link');
        anchor.classList.add('mob-nav');
        listItem.prepend(anchor);
        fragment.prepend(listItem);
        //console.log(idName);

    });
    navbar.prepend(fragment);
};




// Add class 'active' to section when near top of viewport

const activeSection = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if (entry.isIntersecting) {
        entry.target.classList.add('your-active-class');
        const idSec = entry.target.getAttribute('data-nav');
        const lista = document.querySelectorAll('a');
        lista.forEach(function (item) {
            if (item.textContent === idSec) {
                item.parentElement.classList.add('active');
            } else {
                item.parentElement.classList.remove('active');
            }
        })

    } else {
        entry.target.classList.remove('your-active-class');

    }
};

const sectionObserver = new IntersectionObserver(activeSection, {
    root: null,
    threshold: [0.5, 1.0],
});




// Scroll to anchor ID using scrollTO event
const scrollToSection = function (event) {
    event.preventDefault();

    if (event.target.classList.contains('menu__link')) {
        const id = event.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
        const list = document.querySelectorAll('li');
        removeClass(list, 'active');
        event.target.parentElement.classList.add('active');
    }


};

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu
buildNav();


// Scroll to section on link click
navList.addEventListener('click', scrollToSection);


// Set sections as active
const list = document.querySelectorAll('li');
removeClass(sections, 'your-active-class');

sections.forEach(function (section) {
    sectionObserver.observe(section);

});