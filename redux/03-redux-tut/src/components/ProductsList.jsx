import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productsSelectors } from "../redux/slices/productSlice";
import Product from "./Product";

const ProductsList = () => {
	const dispatch = useDispatch();

	const products = useSelector(productsSelectors.selectAllProducts);
	const loading = useSelector(productsSelectors.selectLoading);
	const error = useSelector(productsSelectors.selectError);

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	return (
		<div className="products-container">
			<h2>Product list</h2>
			{loading && !error && <p className="status">loading products...</p>}
			{error && <p className="status">{error}</p>}
			{!loading && !error && (
				<ul className="products-list">
					{products.map((product) => {
						return (
							<li key={product.id}>
								<Product product={product} />
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default ProductsList;
