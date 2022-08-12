import React, { useEffect, useState } from "react";
import getProductos from "../../helpers/getProductos";
import ItemList from "../ItemList/ItemList";

getProductos();

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