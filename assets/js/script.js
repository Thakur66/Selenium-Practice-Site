// Function to toggle menu visibility
function toggleMenu(menuId) {
    let menu = document.getElementById(menuId);
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Function to show the correct content based on menu selection
function showContent(sectionId) {
    let sections = document.getElementsByClassName("content-section");

    // Hide all sections first
    for (let section of sections) {
        section.style.display = "none";
    }

    // Show the selected section
    document.getElementById(sectionId).style.display = "block";
}

// Show 'Text Box' section by default on page load
document.addEventListener("DOMContentLoaded", function () {
    showContent('textbox');
});
