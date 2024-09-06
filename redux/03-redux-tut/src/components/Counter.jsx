import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/slices/counterSlice";

const Counter = () => {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	const handleIncrement = () => {
		dispatch(increment());
	};
	const handleDecrement = () => {
		dispatch(decrement());
	};

	return (
		<div>
			<h1 className="counter-heading">Counter: {counter}</h1>
			<button onClick={handleIncrement}>Inc</button>
			<button onClick={handleDecrement}>Dec</button>
		</div>
	);
};

export default Counter;
