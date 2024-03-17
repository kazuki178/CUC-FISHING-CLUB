
//バーガーメニューの開閉animation
const burger = document.querySelector(".burger");
const header = document.querySelector(".header_menu");
const headerlinks = document.querySelectorAll(".header_menu li");

burger.addEventListener("click", () => {
    header.classList.toggle("header_active");
    burger.classList.toggle("toggle");

    headerlinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `headerlinksFade 0.5s ease forwards ${index / 5 + 0.5}s`;
        }
    });
});