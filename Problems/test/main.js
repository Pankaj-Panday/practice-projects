const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	const formData = new FormData(form);
	console.log(formData);
	for (const [key, value] of formData.entries()) {
		console.log(key, value);
	}
});
