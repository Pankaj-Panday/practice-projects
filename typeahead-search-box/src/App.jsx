import Searchbar from "./components/Searchbar";
import SearchResult from "./components/SearchResult/SearchResult";
import NoItemFound from "./components/NoItemFound";
import SearchError from "./components/SearchError";
import "./App.css";

function App() {
	const itemsToShow = 5;
	const transformApiData = (data) => {
		return data.results.slice(0, itemsToShow);
	};

	const transformItem = (item) => {
		return item.name;
	};

	const apiReq = async (query, signal) =>
		await fetch(`https://swapi.dev/api/people/?search=${query}`, {
			signal: signal,
		});

	return (
		<div className="app">
			<div className="wrapper">
				<Searchbar
					name="charName"
					id="charName"
					placeholder="Enter name"
					autoComplete={true}
					className={{
						label: "",
						input: "search-input",
					}}
					debounceWait={400}
					searchResult={(items, selectedIndex) => (
						<SearchResult items={items} selectedIndex={selectedIndex} />
					)}
					noItemsFound={() => <NoItemFound />}
					searchError={() => <SearchError />}
					transformApiData={transformApiData}
					transformItem={transformItem}
					apiReq={apiReq}
				/>
			</div>
		</div>
	);
}

export default App;
