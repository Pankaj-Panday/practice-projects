// select elements
const body = document.getElementsByTagName("body")[0];
const initialForm = document.getElementById("initial-form");
const resetBtn = document.getElementById("reset-btn");
const numPlansInput = document.getElementById("numPlans");
const output = document.getElementById("output");
let numPlans = 0;

initialForm.addEventListener("submit", function (event) {
	event.preventDefault();
	numPlans = parseInt(numPlansInput.value);
	if (!numPlans) {
		return alert("Invalid value. Allowed Values: (1 to 30)");
	}
	if (numPlans < 1 || numPlans > 30) {
		return alert(
			"Allowed Values: (1 to 30). For more plans keep adding rows as you go"
		);
	}
	const mainForm = generateFormContent(numPlans);
	mainForm.addEventListener("submit", function (e) {
		e.preventDefault();
		const formData = new FormData(this);
		const plans = createPlansArray(formData);
		if (plans.length === 0) return alert("Invalid values");
		const sortedplans = calculate(plans);
		const table = generateTable(sortedplans);
		// clear previous output
		output.innerHTML = "";
		output.appendChild(table);
	});
});

resetBtn.addEventListener("click", function () {
	numPlansInput.value = "";
	output.innerHTML = "";
	deleteplanForm();
});

/* utility functions */
function createRow() {
	const createInput = (type, name, placeholder) => {
		const input = document.createElement("input");
		input.type = type;
		input.placeholder = placeholder;
		input.name = name;
		input.setAttribute(
			"class",
			"border-2 border-orange-500 m-2 rounded-md p-1"
		);
		return input;
	};
	// create a div
	const row = document.createElement("div");
	row.setAttribute("id", "row");
	row.setAttribute("class", "mb-2 bg-gray-200 rounded-lg");
	// create 3 inputs
	const planInput = createInput(
		"text",
		"planPrice",
		"Price in rupees (e.g. 299)"
	);
	const dataInput = createInput(
		"text",
		"dataPerDay",
		"Data/day in GB (e.g 1.5)"
	);
	const validityInput = createInput(
		"text",
		"validity",
		"Validity in days (e.g. 56)"
	);

	const delBtn = document.createElement("button");
	delBtn.textContent = "Del";
	delBtn.onclick = function (e) {
		e.preventDefault();
		if (numPlans > 1) {
			numPlans--;
			e.target.parentNode.remove();
		} else {
			deleteplanForm();
		}
	};
	delBtn.setAttribute(
		"class",
		"bg-orange-400 text-sm font-medium py-2 px-4 mr-2 rounded-lg text-white"
	);

	// append all input elements to row
	row.append(planInput, dataInput, validityInput, delBtn);
	return row;
}
function createPlansArray(formData) {
	const plans = [];
	let propCount = 0;
	let singlePlan = {};
	for (const [key, value] of formData) {
		if (!parseFloat(value) || parseFloat(value) <= 0) {
			return [];
		}
		if (propCount < 3) {
			singlePlan[key] = value === "" ? 0 : value;
			propCount++;
		}
		if (propCount === 3) {
			plans.push({ ...singlePlan });
			propCount = 0;
			singlePlan = {};
		}
	}
	return plans;
}
function generateFormContent(rowCount) {
	// create form skeleton
	const form = document.getElementById("plans-form");
	const div = document.createElement("div");
	const btnContainer = document.createElement("div");
	const calcBtn = document.createElement("button");
	const addRowBtn = document.createElement("button");

	// clear if any previous html
	form.innerHTML = "";

	calcBtn.setAttribute("type", "submit");
	calcBtn.textContent = "Calculate";
	addRowBtn.textContent = "Add row";
	// styling
	div.setAttribute("class", "mt-8");
	btnContainer.setAttribute("class", "flex gap-2 mt-2");
	calcBtn.setAttribute(
		"class",
		"bg-orange-400 text-sm uppercase font-medium py-2 px-4 rounded-lg text-white"
	);
	addRowBtn.setAttribute(
		"class",
		"bg-orange-400 text-sm uppercase font-medium py-2 px-4 rounded-lg text-white"
	);

	// create rows inside div of form
	for (let i = 1; i <= rowCount; i++) {
		const row = createRow();
		div.appendChild(row);
	}

	// attach event listener to addRow button to make it add rows
	addRowBtn.addEventListener("click", function (e) {
		e.preventDefault();
		const row = createRow();
		div.appendChild(row);
		numPlans++;
	});

	// attach div and button to the form and then attach form to body
	btnContainer.append(addRowBtn, calcBtn);
	form.append(div, btnContainer);
	return form;
}
function calculate(plans) {
	const unsortedplans = plans.map((pack) => {
		const { planPrice, dataPerDay, validity } = pack;
		const totalData = dataPerDay * validity;
		const pricePerGb = totalData > 0 ? (planPrice / totalData).toFixed(2) : 0;
		const resObj = {
			planPrice,
			validity,
			dataPerDay,
			totalData,
			pricePerGb,
		};
		return resObj;
	});
	const sortedplans = unsortedplans.sort((pack1, pack2) => {
		return pack1.pricePerGb - pack2.pricePerGb;
	});
	return sortedplans;
}
function formatPrice(price) {
	const formattedPrice = new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
	}).format(price);
	return formattedPrice;
}
function generateTable(rowsData) {
	const table = document.createElement("table");
	const thead = document.createElement("thead");
	const tbody = document.createElement("tbody");
	const theadRow = document.createElement("tr");
	const planHeading = document.createElement("th");
	const validityHeading = document.createElement("th");
	const dataPerDayHeading = document.createElement("th");
	const totalDataHeading = document.createElement("th");
	const pricePerGbHeading = document.createElement("th");

	// styling
	theadRow.setAttribute("class", "border-b border-orange-500");
	planHeading.setAttribute("class", "font-semibold py-2 w-32 min-w-16");
	validityHeading.setAttribute("class", "font-semibold py-2 w-32 min-w-16");
	dataPerDayHeading.setAttribute("class", "font-semibold py-2 w-32 min-w-16");
	totalDataHeading.setAttribute("class", "font-semibold py-2 w-32 min-w-16");
	pricePerGbHeading.setAttribute("class", "font-semibold py-2 w-32 min-w-16");

	rowsData.forEach(
		({ planPrice, validity, dataPerDay, totalData, pricePerGb }) => {
			const row = document.createElement("tr");
			const data1 = document.createElement("td");
			const data2 = document.createElement("td");
			const data3 = document.createElement("td");
			const data4 = document.createElement("td");
			const data5 = document.createElement("td");
			data1.textContent = formatPrice(planPrice);
			data2.textContent = validity + " days";
			data3.textContent = dataPerDay + " GB";
			data4.textContent = totalData + " GB";
			data5.textContent = formatPrice(pricePerGb);
			// styling
			[data1, data2, data3, data4, data5].forEach((data) => {
				data.setAttribute("class", "py-1");
			});
			// attach everything
			row.append(data1, data2, data3, data4, data5);
			tbody.append(row);
		}
	);

	// adding to make data
	planHeading.textContent = "Plan";
	validityHeading.textContent = "Validity";
	dataPerDayHeading.textContent = "Data per day";
	totalDataHeading.textContent = "Total data";
	pricePerGbHeading.textContent = "Price per GB";

	theadRow.append(
		planHeading,
		validityHeading,
		dataPerDayHeading,
		totalDataHeading,
		pricePerGbHeading
	);
	thead.append(theadRow);
	table.append(thead, tbody);

	return table;
}
function deleteplanForm() {
	const form = document.getElementById("plans-form");
	form.innerHTML = "";
}
