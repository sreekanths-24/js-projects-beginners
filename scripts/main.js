// JavaScript code to handle tab switching
const mainBtn = document.getElementById("mainbtn");
const jsBtn = document.getElementById("jsbtn");
const mainProjects = document.getElementById("main-projects");
const jsProjects = document.getElementById("js-projects");

mainBtn.addEventListener("click", () => {
    mainProjects.style.display = "block";
    jsProjects.style.display = "none";
    mainBtn.classList.add("active");
    jsBtn.classList.remove("active");
});

jsBtn.addEventListener("click", () => {
    mainProjects.style.display = "none";
    jsProjects.style.display = "block";
    mainBtn.classList.remove("active");
    jsBtn.classList.add("active");
});

// Swipe gesture handling
let startX;

document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;

    if (deltaX > 50) {
        // Swipe right, switch to Main Projects
        mainBtn.click();
    } else if (deltaX < -50) {
        // Swipe left, switch to Practice Projects
        jsBtn.click();
    }
});