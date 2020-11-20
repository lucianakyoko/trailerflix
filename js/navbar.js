var nav = document.querySelector('.navbar__links');
var burger = document.querySelector('.burger');
var links = nav.querySelectorAll('.navbar__link');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  burger.classList.toggle('toggle');
});

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.toggle('nav-open');
    burger.classList.toggle("toggle");
  });
});