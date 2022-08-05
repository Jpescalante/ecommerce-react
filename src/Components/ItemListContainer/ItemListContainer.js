import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

function ItemListContainer(props) {
  return (
    <div className="main-container">
      <h1 className="text-style"> {props.greeting}</h1>
      <ItemCount initial={1} stock={5}></ItemCount>
    </div>
  );
}

export default ItemListContainer;
