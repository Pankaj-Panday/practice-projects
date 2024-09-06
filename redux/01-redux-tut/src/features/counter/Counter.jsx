import React, { useState } from "react";
import css from "./counter.module.css";
import { useSelector, useDispatch } from "react-redux";

import {
	increment,
	decrement,
	incrementByAmount,
	incrementAsync,
	selectCount,
} from "./counterSlice.js";

const Counter = () => {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = useState("2");
	return (
		<div>
			<div className={css.row}>
				<button
					className={css.button}
					onClick={() => {
						dispatch(increment());
					}}
				>
					+
				</button>
				<span className={css.value}>{count}</span>
				<button
					className={css.button}
					onClick={() => {
						dispatch(decrement());
					}}
				>
					-
				</button>
			</div>
			<div className={css.row}>
				<input
					className={css.textbox}
					value={incrementAmount}
					onChange={(event) => {
						setIncrementAmount(event.target.value);
					}}
				/>
				<button
					className={css.button}
					onClick={() => {
						dispatch(incrementByAmount(Number(incrementAmount)));
					}}
				>
					Add Amount
				</button>
				<button
					className={css.asyncButton}
					onClick={() => {
						dispatch(incrementAsync(Number(incrementAmount)));
					}}
				>
					Add Async
				</button>
			</div>
		</div>
	);
};

export default Counter;
