

// =====================================
// NAVIGATION - MOBILE MENU
// =====================================

function initializeNavigation() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (!menuToggle || !navLinks) {
        return;
    }

    // Open and close the mobile menu
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    // Close the menu after selecting a navigation link
    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });

    // Close the mobile menu when switching to desktop width
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        }
    });
}


// =====================================
// NAVIGATION - SMOOTH SCROLLING
// =====================================

function initializeSmoothScrolling() {
    const navigationLinks = document.querySelectorAll(
        '.navbar a[href^="#"]'
    );

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
}


// =====================================
// JOURNEY - SHOW MORE / SHOW LESS
// =====================================

function initializeJourneyToggle() {
    const journeyContainer = document.querySelector(".journey-container");
    const toggleButton = document.getElementById("journey-toggle");

    if (!journeyContainer || !toggleButton) {
        return;
    }

    const journeyCards = journeyContainer.querySelectorAll(".journey-card");

    const visibleCards = 4;

    // Hide cards after the first four
    journeyCards.forEach(function (card, index) {
        if (index >= visibleCards) {
            card.classList.add("journey-hidden");
        }
    });

    // Hide the button if there are four or fewer cards
    if (journeyCards.length <= visibleCards) {
        toggleButton.style.display = "none";
        return;
    }

    toggleButton.addEventListener("click", function () {
        const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";

        journeyCards.forEach(function (card, index) {
            if (index >= visibleCards) {
                card.classList.toggle("journey-hidden", isExpanded);
            }
        });

        toggleButton.setAttribute("aria-expanded", String(!isExpanded));
        toggleButton.textContent = isExpanded ? "Show More" : "Show Less";
    });
}


// =====================================
// HOBBIES - IMAGE LIGHTBOX
// =====================================

function initializeHobbyLightbox() {
    const lightbox = document.getElementById("hobby-lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const closeButton = document.getElementById("lightbox-close");

    const hobbyImages = document.querySelectorAll(".hobbies-grid img");

    if (!lightbox || !lightboxImage || !closeButton) {
        return;
    }

    // Open the lightbox
    function openLightbox(image) {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        if (lightboxCaption) {
            lightboxCaption.textContent = image.alt;
        }

        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";
        closeButton.focus();
    }

    // Close the lightbox
    function closeLightbox() {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");

        lightboxImage.src = "";
        document.body.style.overflow = "";
    }

    // Make hobby images clickable
    hobbyImages.forEach(function (image) {
        image.style.cursor = "pointer";
        image.setAttribute("tabindex", "0");
        image.setAttribute("role", "button");
        image.setAttribute("aria-label", "View " + image.alt + " image");

        image.addEventListener("click", function () {
            openLightbox(image);
        });

        // Support keyboard interaction
        image.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openLightbox(image);
            }
        });
    });

    // Close using the close button
    closeButton.addEventListener("click", closeLightbox);

    // Close when clicking outside the image
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // Close using the Escape key
    document.addEventListener("keydown", function (event) {
        if (
            event.key === "Escape" &&
            lightbox.classList.contains("active")
        ) {
            closeLightbox();
        }
    });
}


// =====================================
// FOOTER - AUTOMATIC COPYRIGHT YEAR
// =====================================

function updateCopyrightYear() {
    const currentYear = document.getElementById("current-year");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
}


// =====================================
// FOOTER - BACK TO TOP
// =====================================

function initializeBackToTop() {
    const backToTopButton = document.querySelector(".back-to-top");

    if (backToTopButton) {
        backToTopButton.addEventListener("click", function (event) {
            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
}


// =====================================
// INITIALIZE FOOTER FUNCTIONS
// =====================================

document.addEventListener("DOMContentLoaded", function () {
    initializeNavigation();
    initializeSmoothScrolling();
    initializeJourneyToggle();
    initializeHobbyLightbox();
    updateCopyrightYear();
    initializeBackToTop();
});
