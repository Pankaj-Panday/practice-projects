import React from "react";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../redux/slices/cartSlice";

const Cart = () => {
	const totalPrice = useSelector(selectTotalPrice);
	return (
		<article className="cart-container">
			<h2>Your Cart (Total: {totalPrice})</h2>
		</article>
	);
};

export default Cart;
