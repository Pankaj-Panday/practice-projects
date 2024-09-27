import "./App.css";
import Container from "./components/Container";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<Container>
			<Sidebar />
			<Content />
		</Container>
	);
}

export default App;
