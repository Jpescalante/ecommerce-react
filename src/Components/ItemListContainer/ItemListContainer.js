import React, { useEffect, useState } from "react";
import getProductos from "../../helpers/getProductos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


function ItemListContainer({ props }) {
  const [data, setData] = useState([]);
  const idCategory = useParams().idCategory;

  useEffect(() => {
    getProductos().then((respuesta) => {
      let itemsFilter = respuesta.filter(
        (element) => element.category === idCategory
      );
      if (idCategory === undefined) {
        setData(respuesta);
      } else {
        setData(itemsFilter);
      }
    });
  }, [idCategory]);

  return (
    <>
      <ItemList data={data} />
    </>
  );
}

export default ItemListContainer;
