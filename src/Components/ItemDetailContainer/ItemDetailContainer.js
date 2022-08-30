import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import getProductos from "../../helpers/getProductos.js";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const idUrl = useParams().id;
  const [data, setData] = useState({});

  useEffect(() => {
    getProductos(idUrl)
      .then((respuesta) => {
        setData(respuesta);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h4 className="text-center mt-5 flashTitle"></h4>
      <div className="containerDetail container mt-5 mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <div className="card-detail">
              <div className="row">
                {
                  <ItemDetail
                    name={data.name}
                    price={data.price}
                    description={data.description}
                    image={data.image}
                    category={data.category}
                    stock={data.stock}
                    id={data.id}
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetailContainer;
