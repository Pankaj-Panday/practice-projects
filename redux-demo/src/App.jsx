import React from "react";
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout.jsx";
import { Home, Cart } from "./pages/index.js";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<MainLayout />}>
			<Route index element={<Home />} />
			<Route path="cart" element={<Cart />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
