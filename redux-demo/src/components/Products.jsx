import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice.js";
import { fetchProducts, STATUS } from "../store/productSlice.js";

const Products = () => {
	const dispatch = useDispatch();
	const { data: products, status } = useSelector((state) => state.product);
	// const [products, setProducts] = useState([]);

	useEffect(() => {
		dispatch(fetchProducts());
		// const fetchProduct = async () => {
		// 	const res = await fetch("https://fakestoreapi.com/products");
		// 	const data = await res.json();
		// 	setProducts(data);
		// };
		// fetchProduct();
	}, []);

	const handleAdd = (product) => {
		dispatch(add(product));
	};

	if (status === STATUS.LOADING) {
		return <h2>Loading...</h2>;
	}
	if (status === STATUS.ERROR) {
		return <h2>Something went wrong!!!</h2>;
	}

	return (
		<div className="productsWrapper">
			{products.map((product) => (
				<div className="card" key={product.id}>
					<img src={product.image} alt="" />
					<h4>{product.title}</h4>
					<h5>{product.price}</h5>
					<button className="btn" onClick={() => handleAdd(product)}>
						Add to cart
					</button>
				</div>
			))}
		</div>
	);
};

export default Products;
