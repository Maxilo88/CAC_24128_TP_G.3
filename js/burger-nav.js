document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const navMenu = document.getElementById("navMenu");

    hamburgerMenu.addEventListener("click", toggleMenu);

    function toggleMenu(event) {
        navMenu.classList.toggle("active");
        event.stopPropagation();
    }

    // Cerrar el menú cuando se hace clic fuera de él
    document.addEventListener("click", function(event) {
        if (!navMenu.contains(event.target) && event.target !== hamburgerMenu) {
            navMenu.classList.remove("active");
        }
    });
});