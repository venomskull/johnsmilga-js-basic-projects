// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggleBtn = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggleBtn.addEventListener("click", function () {
    // linksContainer.classList.toggle("show-links");

    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    console.log(linksContainerHeight, 'linksContainerHeight')

    if (linksContainerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const navbarHeight = navbar.getBoundingClientRect().height;
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.scrollY;

    if (scrollHeight > navbarHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }

    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = link.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        // calculate the heights
        const navbarHeight = navbar.getBoundingClientRect().height;
        const linksContainerHeightNew = linksContainer.getBoundingClientRect().height;
        console.log(linksContainerHeightNew, 'linksContainerHeightNew')

        const navFixed = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navbarHeight;
        console.log(position, 'position');
        console.log(navbarHeight, 'navbarHeight');

        if (!navFixed){
            position = position - navbarHeight;
        }

        // as per tutorial this condition
        // if(navbarHeight > 82){
        //     position = position + linksContainerHeightNew;
        // }

        // I have written this condition
        if(linksContainerHeightNew > 50){
            position = position + linksContainerHeightNew;
        }

        window.scrollTo({
            left: 0,
            top: position
        });
        linksContainer.style.height = 0;
    });
});
