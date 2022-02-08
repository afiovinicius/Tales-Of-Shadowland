// menu
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
  const active = navbar.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// sub-menu
const subMenu = document.querySelectorAll(".btn-dropdown");
const dropDownMenus = document.querySelectorAll("._nav .drop-down");
const dropAction = document.querySelectorAll("._nav .drop-down");

subMenu.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    subMenu.forEach((btnr) => {
      btnr.classList.remove("active");
    });

    dropDownMenus.forEach((dropr) => {
      dropr.classList.remove("active");
    });

    btn.parentElement.lastElementChild.classList.add("active");

    dropDownMenus[index].classList.add("active");
  });
});

window.addEventListener("click", (e) => {
  dropAction.forEach((menu) => {
    if (e.target !== menu && !e.target.classList.contains("btn-dropdown")) {
      menu.classList.remove("active");
    }
  });
});

// slide
var swiper = new Swiper(".slide", {
  effect: "fade",
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
