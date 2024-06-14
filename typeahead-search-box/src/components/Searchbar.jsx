import React from "react";
import { useState } from "react";
import useFetchPromise from "../hooks/useFetchPromise";
import { useEffect } from "react";

const Searchbar = ({
	label,
	name,
	id,
	placeholder,
	autoComplete,
	className,
	debounceWait,
	searchResult,
	noItemsFound,
	searchError,
	transformApiData,
	transformItem,
	apiReq,
}) => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedIndex, setSelectedIndex] = useState(null);
	const [shouldAutoComplete, setShouldAutoComplete] = useState(autoComplete);
	const [data, setData, error] = useFetchPromise(
		searchQuery,
		transformApiData,
		shouldAutoComplete,
		apiReq,
		debounceWait
	);

	const handleChange = (e) => {
		setSearchQuery(() => e.target.value);
	};

	const handleKeyUp = (event) => {
		const { keyCode } = event;
		if (!data || data.length === 0) return;
		if (keyCode === 13) {
			// enter
			if (!searchQuery || selectedIndex === null) return;
			setSearchQuery(transformItem(data[selectedIndex]));
			setData(null);
			setSelectedIndex(null);
			setShouldAutoComplete(false);
			return;
		}
		setShouldAutoComplete(autoComplete);
		if (!shouldAutoComplete) return;

		if (keyCode === 40) {
			// down arrow
			if (selectedIndex === null || selectedIndex === data.length - 1) {
				setSelectedIndex(0);
			} else {
				setSelectedIndex((prevIndex) => prevIndex + 1);
			}
		} else if (keyCode === 38) {
			// up arrow
			if (selectedIndex === null || selectedIndex === 0) {
				setSelectedIndex(data.length - 1);
			} else {
				setSelectedIndex((prevIndex) => prevIndex - 1);
			}
		}
	};

	useEffect(() => {
		if (!searchQuery) {
			setSelectedIndex(null);
		}
	}, [searchQuery, setSelectedIndex]);

	return (
		<>
			{label && (
				<label htmlFor={id} className={className.label}>
					{label}
				</label>
			)}
			<input
				id={id}
				name={name}
				className={className.input}
				placeholder={placeholder}
				value={searchQuery}
				onChange={handleChange}
				autoComplete="off"
				onKeyUp={handleKeyUp}
			/>
			{data && data.length > 0 && searchResult(data, selectedIndex)}
			{searchQuery && data && data.length === 0 && noItemsFound()}
			{error && searchError()}
		</>
	);
};

export default Searchbar;
