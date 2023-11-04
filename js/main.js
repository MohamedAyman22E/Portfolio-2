// service
let closeBtn = document.querySelectorAll(".service_model .close");
let service_cardLink = document.querySelectorAll(".service_card a");
let serviceModel = document.querySelector(".service_model");

service_cardLink.forEach(card => {
  card.addEventListener("click", () => {
    serviceModel.classList.add("active");
  });
});
closeBtn.forEach(close => {
  close.addEventListener("click", () => {
    serviceModel.classList.remove("active");
  });
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

let spanItem = document.querySelectorAll(".work_filter span");
spanItem.forEach(span => {
  span.addEventListener("click", () => {
    spanItem.forEach(spanRemove => {
      spanRemove.classList.remove("active");
    });
    span.classList.add("active");
  });
});
let mixer = mixitup(".work_container", {
  selectors: {
    target: ".work_card",
  },
  animation: {
    duration: 300,
  },
});

let themeButton = document.getElementById("theme-button");
let lightThem = "light-theme";
let iconThem = "bx-sun";
let selectTheme = localStorage.getItem("selected-theme");
let selectIcon = localStorage.getItem("selected-icon");

let getCurrentTheme = () =>
  document.body.classList.contains(lightThem) ? "dark" : "light";
let getCurrentIcon = () =>
  themeButton.classList.contains(iconThem) ? "bx bx-moon" : "bx bx-sun";

if (selectTheme) {
  document.body.classList[selectTheme === "dark" ? "add" : "remove"](lightThem);
  themeButton.classList[selectTheme === "bx bx-moon" ? "add" : "remove"](
    iconThem
  );
}
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(lightThem);
  themeButton.classList.toggle(iconThem);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

window.addEventListener("scroll", () => {
  document
    .querySelector("header")
    .classList.toggle("active", window.scrollY > 50);
});

let navLinks = document.querySelectorAll(".navLink");
navLinks.forEach(activeLink => {
  activeLink.addEventListener("click", () => {
    navLinks.forEach(removeActive => {
      removeActive.classList.remove("active__link");
    });
    activeLink.classList.add("active__link");
  });
});
