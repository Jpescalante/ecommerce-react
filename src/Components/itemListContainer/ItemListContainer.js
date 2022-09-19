import React, { useEffect, useState } from "react";
import getProductos from "../../helpers/getProductos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import SpinerLoader from "../SpinerLoader/SpinerLoader";

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
      {data.length === 0 ? (
        <SpinerLoader />
      ) : (
        <section className="itemsContainer">
          <ItemList data={data} />
        </section>
      )}
    </>
  );
}

export default ItemListContainer;
