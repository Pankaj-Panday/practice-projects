import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProductsProvider from "../src/context/ProductsContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ProductsProvider>
			<App />
		</ProductsProvider>
	</StrictMode>
);
