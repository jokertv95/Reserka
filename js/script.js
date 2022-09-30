const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

// FAQ Accordeon
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

// SLICK
// $(document).ready(function () {
//   $(".carousel__inner").slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true,
//     prevArrow:
//       '<button type="button" class="slick-prev"><i class="icon-left"></i></button',
//     nextArrow:
//       '<button type="button" class="slick-prev"><i class="icon-right"></i></button',
//   });
// });

// TINY SLIDER

const slider = tns({
  container: ".carousel__inner",
  slideBy: "1",
  autoplay: false,
  controls: false,
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
