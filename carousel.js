
document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".category-cards");
  const buttons = document.querySelectorAll(".selector");
  let isDragStart = false;
  let prevPageX, prevScrollLeft;
  const firstimg = document.querySelector(".card");
  const firstimgWidth = firstimg.clientWidth + 24;

  // Attach event listeners to all of the category cards
  const categoryCards = document.querySelectorAll(".category-card");
  categoryCards.forEach(categoryCard => {
    categoryCard.addEventListener("click", () => {
      // Scroll to the category card
      carousel.scrollLeft = categoryCard.offsetLeft;
    });
  });

  // Attach event listeners to the selector buttons
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Scroll to the next or previous category card, depending on the button
      carousel.scrollLeft += button.classList.contains("selector-left") ? -firstimgWidth : firstimgWidth;
    });
  });``

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

});
