import React, { useEffect, useState } from "react";
import dataJSON from "../../data/Data.js";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer({ itemid }) {
  const [data, setData] = useState({});

  function getProduct() {
    return new Promise((resolve, reject) => {
      resolve(dataJSON[3]);
    });
  }

  function onAdd(count) {
    console.log(`You Have added ${count} products`);
  }
  useEffect(() => {
    getProduct()
      .then((respuesta) => {
        setData(respuesta);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h4 className='text-center mt-5 flashTitle'></h4>
      <div className='container mt-5 mb-5'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-10'>
            <div className='card-detail'>
              <div className='row'>
                {
                  <ItemDetail
                    name={data.name}
                    price={data.price}
                    description={data.description}
                    image={data.image}
                    category={data.category}
                    stock={data.stock}
                    id={data.id}
                    onAdd={onAdd}
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