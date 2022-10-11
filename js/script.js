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

// GOOGLE MAP
let map;

function initMap() {
  // The location of Uluru
  const Reserka = { lat: 25.686509159041847, lng: -80.37084807515956 };
  // 25.686509159041847, -80.37084807515956
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: Reserka,
    mapId: "ca62ed435509f667",
  });

  const marker1 = new google.maps.Marker({
    position: Reserka,
    map: map,
  });
}
window.initMap = initMap;
