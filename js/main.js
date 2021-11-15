var menuButton = document.querySelector(".header-button");
menuButton.addEventListener('click', function () {
  console.log("Клик по кнопке меню");
  document
  .querySelector(".navbar")
  .classList.toggle('navbar--visible');
});