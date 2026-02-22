export function initBurger() {
    const burger = document.querySelector(".burger");
    const screen = document.querySelector(".blur-screen");
    const menu = document.querySelector(".burger-menu");

    const about = document.getElementById("bt-about");
    const skills = document.getElementById("bt-skills");
    const work = document.getElementById("bt-work");
    const portfolio = document.getElementById("bt-portfolio");
    const contacts = document.getElementById("bt-contacts");

    const list = [about, skills, work, portfolio, contacts];

    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;

        screen.classList.toggle("is-active", isOpen);
        screen.classList.toggle("is-pointer", isOpen);
        menu.classList.toggle("is-active", isOpen);
        menu.classList.toggle("is-pointer", isOpen);
    }

    burger.addEventListener("click", toggleMenu);

    list.forEach((target) => {
        target.addEventListener("click", toggleMenu);
    });
}