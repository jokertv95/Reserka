const slider = tns({
  container: ".cta_carousel",
  slideBy: "page",
  controls: false,
  touch: true,
  items: "1",
  autoplay: true,
  responsive: {
    425: {
      items: 1,
      fixedWidth: 300,
    },
    768: {
      items: 1,
      fixedWidth: 534,
    },
    1000: {
      items: 1,
      fixedWidth: 534,
    },
  },
});
