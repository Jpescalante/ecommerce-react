import React from "react";
import './ItemListContainer.css'

function ItemListContainer(props) {
  
  return (
    <div className="main-container">
      <h1 className="text-style"> {props.greeting}</h1>

  </div>
);
}

export default ItemListContainer;
