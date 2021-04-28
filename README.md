# Landing Page

multi-section landing page, with a dynamically updating navigational menu based on the amount of content that is added to the page.

## Built With

html5, CSS3 and JavaScript ES6.

## Project Files

js/app.js
css/styles.css
index.html

## Getting Started (how it works)

1- Build the navigation menu
    dynamic navigation menu based on the sections of the page.

    by using the (forEach) loop. it will loop on every section and create new link for it.

2- functionality to distinguish the section in view
    While navigating through the page, the section that is active in the viewport/closest to the top is distinguished from the other sections.

    by using the intersectionObserver API , it will observe the section when it intersect with the viewport then it will add active class and active class for the link in navigation bar,

3-functionality to scroll to sections
    Clicking on a navigation item it will scroll to the appropriate section of the page.

    by using the scrollIntoView function and matching id of section,so when listening to event for clicking link it scroll to the section


