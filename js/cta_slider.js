const slider_2 = tns({
  container: ".cta_carousel",
  slideBy: "1",
  controls: false,
  touch: true,
  mouseDrag: true,
  center: true,
  items: "1",
  autoWidth: "1",
  autoplay: false,
  responsive: {
    425: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});
