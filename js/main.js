let images = [
  {
    url: "/asset/1.jpg",
    city: "Rostov-on-Don LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    repair: "Upon request",
  },
  {
    url: "/asset/2.jpg",
    city: "Sochi Thieves",
    area: "105 m2",
    time: "4 months",
    repair: "Upon request",
  },
  {
    url: "/asset/3.jpg",
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 months",
    repair: "Upon request",
  },
];

function initSlider() {
  if (!images || !images.length) return;

  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".slider__controls");
  let sliderDots = document.querySelector(".slider__dots");
  let discriptionCarts = document.querySelector(".discriptions__carts");
  let sliderCity = document.querySelector(".slider__city");

  initImages();
  initArrows();
  initDots();
  initTitles();
  initCity();
  initAutoplay();

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${
        index === 0 ? "active" : ""
      }" style="background-image:url(${
        images[index].url
      });" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow").forEach((arrow) => {
      arrow.addEventListener("click", function () {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach((dot) => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
    discriptionCarts.querySelector(".active").classList.remove("active");
    discriptionCarts.querySelector(".n" + num).classList.add("active");
    sliderCity.querySelector(".active").classList.remove("active");
    sliderCity.querySelector(".n" + num).classList.add("active");
  }

  function initTitles(num) {
    images.forEach((item, index) => {
      let disc = `
      <div class="section__2__carts n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}">
              <div class="section__2__item">
                <h3>City:</h3>
                <p>${images[index].city}</p>
              </div>
              <div class="section__2__item">
                <h3>apartment area:</h3>
                <p>${images[index].area}</p>
              </div>
              <div class="section__2__item">
                <h3>Repair time:</h3>
                <p>${images[index].time}</p>
              </div>
              <div class="section__2__item">
                <h3>Repair Cost:</h3>
                <p>${images[index].repair}</p>
              </div>
            </div>`;
      discriptionCarts.innerHTML += disc;
    });
  }
  function initCity() {
    sliderCity.querySelectorAll(".city-p").forEach((city, index) => {
      city.addEventListener("mouseover", () => {
        moveSlider(city.dataset.index);
      });
    });
  }
  function initAutoplay() {
    setInterval(() => {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
      moveSlider(nextNumber);
    }, 4000);
  }
}
initSlider();
