import React, { useEffect, useState } from "react";
import itemsData from "../../data/Data.js";
import ItemList from "../ItemList/ItemList";

function getProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(itemsData), 2000);
  });
}

function ItemListContainer({ props }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProductos().then((respuesta) => {
      setData(respuesta);
    });
  }, []);

  return (
    <>
      <ItemList title={"Ofertas del día"} data={data} />
    </>
  );
}

export default ItemListContainer;