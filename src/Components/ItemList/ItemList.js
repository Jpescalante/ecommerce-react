import React from "react";
import Card from "../card/Card";

function ItemList({ data }) {
  // const outlet = data.filter((obj) => {
  //   return obj.outlet === true;
  // });

  function onAdd(count) {
    console.log(`You have added' ${count} products`);
  }

  return (
    <>
      <h4 className="text-center mt-5 flashTitle">Nuestros Productos</h4>
      <div className="container d-flex align-items-center justify-content-center mt-1">
        <div className="row text-center">
          {
            // outlet.map((item) => (
            //   <Card
            //     key={item.id}
            //     id={item.id}
            //     name={item.name}
            //     price={item.price}
            //     image={item.image}
            //     category={item.category}
            //     description={item.description}
            //     count={item.count}
            //     stock={item.stock}
            //     onAdd={onAdd}
            //   />
            // ))

            data.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                count={item.count}
                name={item.name}
                price={item.price}
                image={item.image}
                stock={item.stock}
                category={item.category}
                description={item.description}
                onAdd={onAdd}
              />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default ItemList;
