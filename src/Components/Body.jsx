import React, { useEffect, useState } from "react";
import "./Body.css";
import ProductItem from "./ProductItem";

function Body() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    };
    fetchProducts();
  }, []);
  return (
    <div className="body">
      <div className="bodyItems">
        {products.map((item, index) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Body;
