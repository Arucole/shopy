import React from "react";
import "./ProductItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/CartSlice";

function ProductItem({ item }) {
  // access the cart
  const cart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };

  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

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
      {cart.some((x) => x.id === item.id) ? (
        <button
          onClick={() => removeItemFromCart(item)}
          className="productItemButton"
        >
          Remove From Cart
        </button>
      ) : (
        <button
          onClick={() => addItemToCart(item)}
          className="productItemButton"
        >
          Add To Cart
        </button>
      )}

      {/* Buy Now Button */}
      <button className="productItemBuy">Buy Now</button>
    </div>
  );
}

export default ProductItem;
