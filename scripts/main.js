// JavaScript code to handle tab switching
const mainBtn = document.getElementById("mainbtn");
const jsBtn = document.getElementById("jsbtn");
const mainProjects = document.getElementById("main-projects");
const jsProjects = document.getElementById("js-projects");
const navItems = document.querySelectorAll(".nav-item");

function switchToMainProjects() {
    mainProjects.style.display = "block";
    jsProjects.style.display = "none";
    mainBtn.classList.add("active");
    jsBtn.classList.remove("active");
}

function switchToJSProjects() {
    mainProjects.style.display = "none";
    jsProjects.style.display = "block";
    mainBtn.classList.remove("active");
    jsBtn.classList.add("active");
}

mainBtn.addEventListener("click", switchToMainProjects);
jsBtn.addEventListener("click", switchToJSProjects);

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
        switchToMainProjects();
        navItems.forEach(item => item.style.transform = 'translateX(0)');
    } else if (deltaX < -50) {
        // Swipe left, switch to Practice Projects
        switchToJSProjects();
        navItems.forEach(item => item.style.transform = 'translateX(0)');
    }
});

// Add animation for left and right movement
navItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.transform = 'translateX(-10px)';
    });

    item.addEventListener("mouseout", () => {
        item.style.transform = 'translateX(0)';
    });
});