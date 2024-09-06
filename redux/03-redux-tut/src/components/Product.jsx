import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const Product = ({ product }) => {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(addToCart(product));
	};

	return (
		<article className="product-card">
			<header>
				<h3>{product.title}</h3>
			</header>

			<p className="product-price">${product.price}</p>

			<button onClick={handleClick}>Add to cart</button>
		</article>
	);
};

export default Product;
