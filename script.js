const carousel = document.querySelector(".category-cards");
const firstimg = carousel.querySelectorAll(".card")[0];
const buttons = document.querySelectorAll(".selector");
let isDragStart = false;
let prevPageX, prevScrollLeft;
const firstimgWidth = firstimg.clientWidth + 24;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        carousel.scrollLeft += button.classList.contains("selector-left") ? -firstimgWidth : firstimgWidth;
    });
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
} 

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    const positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
