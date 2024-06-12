import React from "react";
import "./ListBox.css";

const ListBox = ({ items, activeIndex }) => {
	return (
		<ul className="list-container">
			{items.map((item, index) => (
				<li
					key={index}
					className={`list-item ${
						index === activeIndex ? "active-list-item" : ""
					}`}
				>
					{item.name}
				</li>
			))}
		</ul>
	);
};

export default ListBox;
