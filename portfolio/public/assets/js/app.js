/*
AUTHOR: Rikki Tomiko Ehrhart (rikki.ehrhart@g.austincc.edu)
LAST UPDATE: 12.18.2024

FILE: portfolio/public/assets/js/app.js
DESCRIPTION: This is the functions for my portfolio header &
             footer on my website that is housed at 
             rikkitomikoehrhart.com and is also on Github
*/


// NAV BAR CONTROLS
// These grabs the hamburger menu button, lines, and links
const hamburger = document.getElementById('hamburger');
const hamburgerLines = document.getElementsByClassName('line');
const navLinks = document.getElementById('nav-links');
  

// Toggles the mobile menu
hamburger.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active')
    } else {
        navLinks.classList.add('active');
    }

    // Changes the color of the hamburger menu lines
    for (var i = 0; i < hamburgerLines.length; i++) {
        hamburgerLines[i].style.backgroundColor = navLinks.classList.contains('active')
            ? "var(--darkPink)"
            : "var(--darkGreen)";
    }
});


// Ensures nav bar appears on resizing screen
window.addEventListener('resize', () => {
    if (window.innerWidth >= 769) {
        // Reset menu for desktop view
        navLinks.classList.remove('active');
        navLinks.style.display = "flex";
    } else {
        // Reset to mobile view default
        navLinks.style.display = "";
    }
})



// FOOTER CONTROLS
// This places the current year in the copyright year in the footer
document.getElementById('year').innerHTML = new Date().getFullYear();