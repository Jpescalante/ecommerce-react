import React, { useContext } from "react";
import ItemCount from "../itemCount/ItemCount";
import "./ItemDetail.css";

import { cartContext } from "../../store/cartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

function ItemDetail({ name, price, image, category, description, stock, id }) {
  const { addToCart } = useContext(cartContext);
  const [countCart, setCountCart] = useState(0);
  const data = { name, price, image, category, description, stock, id };
  function addTo(count) {
    addToCart(data, count);
    setCountCart(count);
  }
  return (
    <>
      <div className="col-md-6 d-flex align-items-center">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={image}
              className="d-block w-100 rounded"
              alt={"producto"}
            />
          </div>
        </div>
      </div>

      <div className="col-md-6 f">
        <div className="product p-4">
          <div className="mt-4 mb-3">
            <span className="text-uppercase text-muted brand">{category}</span>
            <h3 className="text-uppercase mt-2 mb-4">{name}</h3>

            <p className="about mb-3">{description}</p>
          </div>

          <div className="price d-flex flex-row align-items-center ">
            <h5>
              {" "}
              Price:
              <span className="act-price "> ${price}</span>
            </h5>
          </div>
          <div className="ml-2 text-center">
            <p className="about">
              <span>Stock: {stock}</span>
            </p>
          </div>

          <div className="cart mt-4">
            {countCart === 0 ? (
              <ItemCount stock={stock} min={1} onAdd={addTo} />
            ) : (
              <>
                <ItemCount stock={stock} min={1} onAdd={addTo} />
                <Link
                  className="btn btn-xs addToCart col-7 mt-auto align-self-start"
                  to={"/cart"}
                >
                  Ver Carrito
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
