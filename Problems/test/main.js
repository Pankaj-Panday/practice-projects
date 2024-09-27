const products = [
	{ id: 1, name: "Laptop", price: 1000, category: "Electronics", discount: 10 },
	{ id: 2, name: "Shoes", price: 200, category: "Fashion", discount: 0 },
	{
		id: 3,
		name: "Smartphone",
		price: 800,
		category: "Electronics",
		discount: 5,
	},
	{ id: 4, name: "T-shirt", price: 50, category: "Fashion" },
	{ id: 5, name: "Fridge", price: 1200, category: "Appliances", discount: 20 },
];

const result = getFilteredProducts(products, 500, 2000, null, "price");
console.log(result);

function getFilteredProducts(products, minPrice, maxPrice, category, sortBy) {
	let finalProducts = [];

	finalProducts = products.map((product) =>
		product.discount
			? { ...product, price: product.price * ((100 - product.discount) / 100) }
			: { ...product }
	);

	finalProducts = finalProducts.filter(
		(product) => product.price >= minPrice && product.price <= maxPrice
	);

	if (category) {
		finalProducts = finalProducts.filter(
			(product) => product.category.toLowerCase() === category.toLowerCase()
		);
	}

	if (sortBy === "name" || sortBy === "price") {
		finalProducts.sort((prod1, prod2) => {
			if (sortBy === "name") return prod1.name.localeCompare(prod2.name);
			else return prod1.price - prod2.price;
		});
	}

	finalProducts.forEach((product) => delete product.discount);
	return finalProducts;
}
