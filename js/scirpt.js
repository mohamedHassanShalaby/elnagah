let scrollTopButton = document.getElementById("scrolltopbutton");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 390) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
});
scrollTopButton.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// add and remove text  //

// this code contains bug
// const accordion = document.getElementsByClassName("contentBx");
// for (i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener("click", function () {
//     this.classList.toggle("activee");
//   });
// }

// this fixes
const accordions = document.querySelectorAll(".contentBx .label");
accordions.forEach((item) => {
  item.addEventListener("click", () => {
    accordions.forEach((element) => {
      if (element !== item) {
        element.parentElement.classList.remove("activee");
      }
    });
    item.parentElement.classList.toggle("activee");
  });
});
// add and remove text  //
// swipper.js//

var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});

// swipper.js//
