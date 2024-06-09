import React from "react";
import SearchResult from "./SearchResult";
import "./SearchResultList.css";

const SearchResultList = ({ results }) => {
	return (
		<div className="results-list">
			{results &&
				results.map((result, index) => {
					return <SearchResult result={result.name} key={index} />;
				})}
		</div>
	);
};

export default SearchResultList;
