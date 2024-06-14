import React from "react";
import "./SearchResult.css";

const SearchResult = ({ items, selectedIndex }) => {
	return (
		<ul className="list">
			{items.map((item, index) => (
				<li
					key={index}
					className={
						index === selectedIndex ? "active-list-item list-item" : "list-item"
					}
				>
					{item.name}
				</li>
			))}
		</ul>
	);
};

export default SearchResult;
