const images = document.querySelectorAll(".img");
const next = document.querySelector(".next-btn");
const prev = document.querySelector(".prev-btn");
let counter = 0;

images.forEach((image, index) => {
	image.style.zIndex = 999 - index;
	const dot = document.createElement("div");
	dot.classList.add("dot");
	if (index === 0) dot.classList.add("active");
	document.querySelector(".dots").appendChild(dot);
});

next.addEventListener("click", () => {
	counter++;
	counter = counter % images.length;
	slideImage("next");
});

prev.addEventListener("click", () => {
	if (counter === 0) counter = images.length;
	counter--;
	slideImage("prev");
});

const dots = document.querySelectorAll(".dot");

const slideImage = (action) => {
	const curActiveImg = document.querySelector(".img.active");
	const curActiveDot = document.querySelector(".dot.active");
	const newActiveImg = images[counter];
	const newActiveDot = dots[counter];
	const time = "0.5s";
	const timingFn = "ease-in";
	if (action === "next") {
		curActiveImg.style.animation = `outgoingToLeft ${time} ${timingFn} forwards`;
		newActiveImg.style.animation = `incomingFromRight ${time} ${timingFn} forwards`;
	} else if (action === "prev") {
		curActiveImg.style.animation = `outgoingToRight ${time} ${timingFn} forwards`;
		newActiveImg.style.animation = `incomingFromLeft ${time} ${timingFn} forwards`;
	}
	curActiveImg.classList.remove("active");
	curActiveDot.classList.remove("active");
	newActiveImg.classList.add("active");
	newActiveDot.classList.add("active");
};
