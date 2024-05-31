function createStars() {
    const container = document.querySelector("body");
    for (let i = 0; i < 1000; i++) {
        // Increase the number of stars to 1000
        const star = document.createElement("div");
        star.className = "star";
        star.style.width = ".1vw";  
        star.style.height = ".1vw"; 
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        container.appendChild(star);
    }
}

createStars();

let isDragging = false;
let initialMouseX;
let initialMouseY;
let initialScrollX;
let initialScrollY;

document.addEventListener("mousedown", (event) => {
    if (event.button === 0) { 
        isDragging = true;
        initialMouseX = event.clientX;
        initialMouseY = event.clientY;
        initialScrollX = window.scrollX;
        initialScrollY = window.scrollY;
    }
});

document.addEventListener("mousemove", (event) => {
    if (isDragging) {
        const deltaX = event.clientX - initialMouseX;
        const deltaY = event.clientY - initialMouseY;
        window.scrollTo(initialScrollX - deltaX, initialScrollY - deltaY);
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

// The code for mouse up and down is adapted from a website