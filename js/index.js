const carouselContainer = document.querySelector(".carousel-container");

const firstItemClone = carouselContainer.firstElementChild.cloneNode(true);
const lastItemClone = carouselContainer.lastElementChild.cloneNode(true);

carouselContainer.appendChild(firstItemClone);
carouselContainer.insertBefore(
  lastItemClone,
  carouselContainer.firstElementChild
);

let currentIndex = 1;
const carouselItems = document.querySelectorAll(".carousel-item");
const totalItems = carouselItems.length;
const itemWidth = carouselItems[0].offsetWidth;

carouselContainer.style.transform = `translateX(-${
  currentIndex * itemWidth
}px)`;

function moveCarousel(direction) {
  if (direction === "next") {
    currentIndex++;
  } else {
    currentIndex--;
  }
  carouselContainer.style.transition = "transform 0.5s ease";
  carouselContainer.style.transform = `translateX(-${
    currentIndex * itemWidth
  }px)`;
}

carouselContainer.addEventListener("transitionend", () => {
  if (currentIndex === totalItems - 1) {
    carouselContainer.style.transition = "none";
    currentIndex = 1;
    carouselContainer.style.transform = `translateX(-${
      currentIndex * itemWidth
    }px)`;
  } else if (currentIndex === 0) {
    carouselContainer.style.transition = "none";
    currentIndex = totalItems - 2;
    carouselContainer.style.transform = `translateX(-${
      currentIndex * itemWidth
    }px)`;
  }
});
