import React from "react";
import {useState} from "react"

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  function addToCart(){
    setInCart(!inCart)
  }
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart}className="add">{inCart ? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
