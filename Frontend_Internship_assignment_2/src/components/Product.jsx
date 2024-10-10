import React from "react";
import { useProducts } from "../context/ProductsContext";

const Product = () => {
  const { activeProduct: product } = useProducts();
  return (
    <article className="h-[150px] w-[200px] border border-black p-4">
      <h3 className="mb-2 text-3xl">{product.name}</h3>
      <p className="mb-1 text-lg">
        <span>Price: </span>
        {product.price}
        {"\u20B9"}
      </p>
      <p className="text-md">Item id: {product.id}</p>
    </article>
  );
};

export default Product;
