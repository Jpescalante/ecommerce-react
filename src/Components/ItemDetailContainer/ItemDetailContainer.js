import React, { useEffect, useState } from "react";
// import dataJSON from "../../data/Data.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import getProductos from "../../helpers/getProductos.js";
import "./ItemDetailContainer.css"

// Id de prueba para probar ItemDetailContainer y getProductos()
let idPrueba= 15;

function ItemDetailContainer({ itemid }) {
  const [data, setData] = useState({});

  getProductos();
  
  // function getProduct() {
  //   return new Promise((resolve, reject) => {
  //     resolve(dataJSON[3]);
  //   });
  // }

  function onAdd(count) {
    console.log(`You Have added ${count} products`);
  }
    
  useEffect(() => {
    getProductos(idPrueba)
      .then((respuesta) => {
        setData(respuesta);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h4 className='text-center mt-5 flashTitle'></h4>
      <div className='containerDetail container mt-5 mb-5'>
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