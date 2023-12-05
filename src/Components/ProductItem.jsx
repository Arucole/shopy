import React from "react";
import "./ProductItem.css";

function ProductItem({ item }) {
  return (
    <div className="productItem">
      {/* image */}
      <img
        style={{
          width: 200,
          height: 200,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        src={item.image}
        alt="Product Image"
      />
      {/* title of product */}
      <p>{item.title.length > 30 ? item.title.substr(0, 30) : item.title}</p>
      {/* product description */}
      <p>
        {item.description.length > 60
          ? item.description.substr(0, 60)
          : item.description}
      </p>

      <p>${item.price}</p>

      {/* Add to cart Button */}
      <button className="productItemButton">Add To Cart</button>
      {/* Buy Now Button */}
      <button className="productItemBuy">Buy Now</button>
    </div>
  );
}

export default ProductItem;
