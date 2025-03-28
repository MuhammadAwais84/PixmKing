document.addEventListener("DOMContentLoaded", function () {
    let hamburger = document.querySelector(".hamburger");
    let navLinks = document.querySelector(".nav-links");
    let closeBtn = document.querySelector("#close-btn");

    // Open menu when clicking hamburger
    hamburger.addEventListener("click", function () {
        navLinks.classList.add("active");
    });

    // Close menu when clicking close button
    closeBtn.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

    // Close menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });
});





