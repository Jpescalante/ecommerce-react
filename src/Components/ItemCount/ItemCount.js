import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function ItemCount(props) {
  const [count, setCount] = useState(props.initial);

  const addCounterHandler = () => {
    if (count < props.stock) {
      setCount(count + 1);
    }
  };

  const removeCounterHandler = () => {
    if (count > props.initial) {
      setCount(count - 1);
    }
  };

  const onAdd = () => {
    if (count > props.stock) {
      alert("No hay stock suficiente");
    } else {
      alert("Añadió {$count} item");
    }
  };

  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">Counter</h5>
        <h3>Count: {count}</h3>
        <button className="btn btn-primary" onClick={addCounterHandler}>
          +
        </button>
        <button className="btn btn-primary" onClick={removeCounterHandler}>
          -
        </button>
        <button className="btn btn-primary" onClick={onAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
