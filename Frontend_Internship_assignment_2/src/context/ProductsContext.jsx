import React, { createContext, useContext, useState } from "react";
import products from "../data.json";

export const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
	const [activeProduct, setActiveProduct] = useState(products[2]);

	return (
		<ProductsContext.Provider
			value={{
				products,
				activeProduct,
				setActiveProduct,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

export const useProducts = () => {
	return useContext(ProductsContext);
};

export default ProductsProvider;
