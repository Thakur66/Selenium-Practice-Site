// Show an alert when clicking the CTA button
function showAlert() {
    alert("Welcome to Automation Testing Playground! 🚀");
}

// Handle dropdown selection
function handleDropdownChange() {
    let dropdown = document.getElementById("testDropdown");
    let selectedValue = dropdown.value;
    alert("You selected: " + selectedValue);
}

// Show modal popup
function showModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Close modal if clicked outside
window.onclick = function(event) {
    let modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
};
