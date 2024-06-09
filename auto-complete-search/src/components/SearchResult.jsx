import React from "react";
import "./SearchResult.css";

const SearchResult = ({ result }) => {
	return (
		<div
			className="search-result"
			onClick={() => {
				alert(`Your clicked on ${result}`);
			}}
		>
			{result}
		</div>
	);
};

export default SearchResult;
