// Modal functionality
const modalButton = document.getElementById("modal-button");
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close");

modalButton.addEventListener("click", () => {
  modal.style.display = "block";
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Dynamic content loading
const loadContentButton = document.getElementById("load-content");
const contentDiv = document.getElementById("content");

loadContentButton.addEventListener("click", () => {
  contentDiv.innerHTML = "<p>This content was loaded dynamically!</p>";
});

// Autocomplete functionality
const autocompleteInput = document.getElementById("autocomplete");
const suggestions = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

autocompleteInput.addEventListener("input", () => {
  const userInput = autocompleteInput.value.toLowerCase();
  const filteredSuggestions = suggestions.filter(item =>
    item.toLowerCase().includes(userInput)
  );
  console.log(filteredSuggestions); // You can display these in a dropdown
});