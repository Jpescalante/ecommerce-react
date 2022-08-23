import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../store/cartContext";

import "./CartWidget.css";

function CartWidget() {
  const { cart, totalAmount } = useContext(cartContext);
  return (
    <Link to={"/cart"}>
      {" "}
      <FontAwesomeIcon icon={faWineGlass} size="2x" color="white" />
      {cart.length === 0 ? (
        <span></span>
      ) : (
        <span className="totalAmount">{totalAmount()}</span>
      )}
    </Link>
  );
}

export default CartWidget;
