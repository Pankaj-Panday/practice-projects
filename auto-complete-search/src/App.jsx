import { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import SearchResultList from "./components/SearchResultList";

function App() {
	const [results, setResults] = useState();

	return (
		<div className="app">
			<div className="search-bar-container">
				<Searchbar setResults={setResults} />
				<SearchResultList results={results} />
			</div>
		</div>
	);
}

export default App;
