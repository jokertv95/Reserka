const processSlider = tns({
  container: ".slider",
  slideBy: "page",
  autoplay: true,
  autoplayButtonOutput: 0,
  items: 1,
  controls: false,
  touch: true,
  mouseDrag: true,
  center: true,
  speed: 500,
  navContainer: ".slider__nav",
  navAsThumbnail: true,
  responsive: {
    375: {
      items: 1,
    },
    700: {
      items: 1,
    },
    750: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1440: {
      items: 1,
    },
    1920: {
      items: 1,
    },
  },
});
