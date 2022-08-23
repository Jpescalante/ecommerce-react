import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./CartItem.css";

function CartItem({
  image,
  name,
  price,
  amount,
  removeItemCart,
  plusItemCart,
  subItemCart,
  id,
  stock,
}) {
  return (
    <div className="itemCart-container">
      <img className="cartImg" src={image} alt={`imagen de: ${name}`}></img>
      <div className="description-container">
        <h2 className="cartName">{name}</h2>
        <h3 className="cartAmount">Cantidad: {amount}</h3>
        <h3 className="cartSubtotal"> Subtotal: ${price}</h3>
        <h3 className="cartStock">Stock Disponible: {stock}</h3>
        <button onClick={() => subItemCart(id)}>-</button>
        <p>{amount}</p>
        <button onClick={() => plusItemCart(id)}>+</button>
        <FontAwesomeIcon
          className="cartDeleteItem"
          onClick={() => removeItemCart(id)}
          icon={faTrashCan}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default CartItem;
