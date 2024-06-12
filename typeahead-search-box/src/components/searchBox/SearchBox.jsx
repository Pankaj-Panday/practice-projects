import React from "react";
import useFetchPromise from "./useFetchPromise";
import { useState } from "react";
import { useEffect } from "react";

const SearchBox = ({
	name,
	label,
	id,
	placeholder,
	autoComplete,
	styles,
	debounceWait,
	listBox,
	noItemsMessage,
	errorMessage,
	transformData,
	transformItem,
	promise,
}) => {
	const [query, setQuery] = useState("");
	const [activeIndex, setActiveIndex] = useState(null);
	const [isAutoComplete, setIsAutoComplete] = useState(autoComplete);
	const [data, setData, error] = useFetchPromise(
		query,
		transformData,
		promise,
		debounceWait,
		isAutoComplete
	);

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleKeyUp = (event) => {
		const keyCode = event.keyCode;
		if (keyCode === 13) {
			// user pressed enter
			if (activeIndex === null) return;
			setQuery(transformItem(data[activeIndex]));
			setData(null);
			setActiveIndex(null);
			setIsAutoComplete(false);
			return;
		}
		setIsAutoComplete(true);
		if (!data || data.length === 0) return;

		if (keyCode === 40) {
			// user pressed down arrow
			if (activeIndex === null || activeIndex === data.length - 1) {
				setActiveIndex(0);
			} else {
				setActiveIndex((prevIndex) => prevIndex + 1);
			}
		} else if (keyCode === 38) {
			// user pressed up arrow
			if (activeIndex === 0) {
				setActiveIndex(data.length - 1);
			} else {
				setActiveIndex((prevIndex) => prevIndex - 1);
			}
		}
	};

	useEffect(() => {
		if (!query) {
			setActiveIndex(null);
		}
	}, [query, setActiveIndex]);

	return (
		<>
			<label htmlFor={id} className={styles.label}>
				{label}
			</label>
			<input
				id={id}
				name={name}
				placeholder={placeholder}
				className={styles.input}
				autoComplete="off"
				value={query}
				onChange={handleChange}
				onKeyUp={handleKeyUp}
			/>
			{data && data.length > 0 && listBox(data, activeIndex)}
			{query && data && data.length === 0 && noItemsMessage()}
			{error && errorMessage()}
		</>
	);
};

export default SearchBox;
