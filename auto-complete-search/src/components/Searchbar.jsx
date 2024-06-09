import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Searchbar.css";

const Searchbar = ({ setResults }) => {
	const [input, setInput] = useState("");

	const fetchData = async (value) => {
		const res = await fetch("https://jsonplaceholder.typicode.com/users");
		const users = await res.json();
		const results = users.filter(
			(user) =>
				value &&
				user &&
				user.name &&
				user.name.toLowerCase().includes(value.toLowerCase())
		);
		setResults(results);
	};

	const handleChange = (value) => {
		setInput(value);
		fetchData(value);
	};

	return (
		<div className="input-wrapper">
			<FaSearch id="search-icon" />
			<input
				type="text"
				value={input}
				onChange={(e) => handleChange(e.target.value)}
				placeholder="Type to search..."
			/>
		</div>
	);
};

export default Searchbar;
