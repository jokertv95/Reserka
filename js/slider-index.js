// TINY SLIDER

const slider = tns({
  container: ".carousel__inner",
  slideBy: "1",
  autoplay: false,
  controls: false,
  touch: true,
  responsive: {
    375: {
      items: 1,
      fixedWidth: 350,
    },
    700: {
      items: 1,
    },
    750: {
      items: 2,
      fixedWidth: 510,
    },
    1000: {
      items: 2,
      fixedWidth: 510,
    },
    1440: {
      items: 2,
      fixedWidth: 910,
    },
    1920: {
      items: 2,
      fixedWidth: 910,
    },
  },
});

document.querySelector(".prev").addEventListener("click", function () {
  slider.goTo("prev");
});

document.querySelector(".next").addEventListener("click", function () {
  slider.goTo("next");
});

//
