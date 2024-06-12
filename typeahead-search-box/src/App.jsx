import { useState } from "react";

import "./App.css";
import SearchBox from "./components/searchBox/SearchBox";
import ListBox from "./components/listBox/ListBox";

function App() {
	const transformData = (data) => data.results.slice(0, 5);
	const transformItem = (item) => item.name;
	const dataPromise = async (query, signal) =>
		await fetch(`https://swapi.dev/api/people/?search=${query}`, { signal });

	return (
		<div className="app">
			<div className="wrapper">
				<SearchBox
					name="personName"
					label="Enter Person Name"
					id="personName"
					placeholder="Enter star war character"
					autoComplete={true}
					styles={{
						label: "search-label",
						input: "search-input",
					}}
					debounceWait={400}
					listBox={(items, activeIndex) => (
						<ListBox items={items} activeIndex={activeIndex} />
					)}
					noItemsMessage={() => <div>No items found</div>}
					errorMessage={() => <div>Something went wrong</div>}
					transformData={transformData}
					transformItem={transformItem}
					promise={dataPromise}
				/>
			</div>
		</div>
	);
}

export default App;
