const menu = document.querySelector(".menu");
let menuOpen = false;
const navlinks = document.querySelectorAll(".navlink");
const navContainer = document.querySelector(".navContainer");

menu.addEventListener("click", () => {
	menuOpen = !menuOpen;
	toggleMenu();
});

document.addEventListener("DOMContentLoaded", () => {
	if (menuOpen) {
		document.body.style.overflow = "hidden";
	}
});

function toggleMenu() {
	menu.classList.toggle("active");
	navContainer.classList.toggle("open");
}
