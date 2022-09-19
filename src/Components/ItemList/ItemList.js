import React from "react";
import Card from "../Card/Card";
import { toast } from "react-toastify";

function ItemList({ data }) {
  function addToCart(count) {
    toast(`${count} producto(s) agregado(s)`);
  }

  return (
    <>
      <h3>Nuestros Productos</h3>
      <div className="container d-flex align-items-center justify-content-center mt-1">
        <div className="row text-center">
          {data.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              count={item.count}
              name={item.name}
              price={item.price}
              image={item.image}
              stock={item.stock}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemList;
