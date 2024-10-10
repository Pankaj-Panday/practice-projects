import React from "react";
import { useProducts } from "../context/ProductsContext";

const ProductList = () => {
  const { products, setActiveProduct } = useProducts();
  return (
    <article>
      <h2 className="text-2xl font-semibold">List of items:</h2>
      <ul>
        {products.map((product) => {
          return (
            <li
              key={product.id}
              onClick={(e) => setActiveProduct(product)}
              className="cursor-pointer"
            >
              <label className="cursor-pointer text-lg">{product.name}</label>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default ProductList;
