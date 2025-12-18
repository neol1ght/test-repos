function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const burger = document.querySelector(".burger");

  const isActive = menu.classList.contains("active");

  // Если меню активно - закрываем, если нет - открываем
  if (isActive) {
    menu.classList.remove("active");
    burger.classList.remove("active");
  } else {
    menu.classList.add("active");
    burger.classList.add("active");
  }
}

// Закрытие меню при клике вне его
document.addEventListener("click", function (event) {
  const menu = document.getElementById("mobileMenu");
  const burger = document.querySelector(".burger");

  // Если клик не по бургеру и не по меню
  if (!burger.contains(event.target) && !menu.contains(event.target)) {
    menu.classList.remove("active");
    burger.classList.remove("active"); // Важно: снимаем класс и с бургера!
  }
});
