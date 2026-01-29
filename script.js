const heading = document.getElementById("heading");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    heading.textContent = "Welcome to SS Infotech 🚀";
    
    // re-trigger animation
    heading.style.animation = "none";
    heading.offsetHeight; // force reflow
    heading.style.animation = "fadeSlide 1.5s ease-in-out";
});
