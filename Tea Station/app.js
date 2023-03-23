const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

const navBtn = document.getElementById("nav-btn");
const navBar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav-link");

navBtn.addEventListener("click", () => {
  navBar.classList.add("showNav");
});

navClose.addEventListener("click", () => {
  navBar.classList.remove("showNav");
});

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    navBar.classList.remove("showNav");
  });
}
