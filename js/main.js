
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
    updateCopyrightYear();
    initializeBackToTop();
});
