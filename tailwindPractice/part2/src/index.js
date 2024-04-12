// Tailwind container working Start
const parent = document.getElementById("parent");
const widthBox = document.getElementById("width-box");

widthBox.textContent = `${parent.clientWidth}px`;

window.addEventListener("resize", function () {
	widthBox.textContent = `${parent.clientWidth}px`;
});
// Tailwind Container working end
