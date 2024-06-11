const input = document.querySelector(".input");

const debounce = (func, wait) => {
	let timeoutId;
	return (...args) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func(...args);
		}, wait);
	};
};

const apiCall = (e) => {
	console.log("API call for 👉", e.target.value);
};

const debouncedApiCall = debounce(apiCall, 400);

input.addEventListener("input", debouncedApiCall);
