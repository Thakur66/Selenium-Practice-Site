document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");

    document.querySelectorAll(".dropdown").forEach(dropdown => {
        dropdown.addEventListener("click", function () {
            this.querySelector(".dropdown-menu").classList.toggle("show");
        });
    });

    document.querySelectorAll(".modal-button").forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".modal").classList.add("show");
        });
    });

    document.querySelector(".modal .close").addEventListener("click", function () {
        document.querySelector(".modal").classList.remove("show");
    });
});
