import "../data/Data.js";
import itemsData from "../data/Data.js";

function getProductos(id) {
if (id!== undefined){
  let detail = itemsData.find (det => det.id === id);
  return new Promise((resolve) => {
    setTimeout(() => resolve(detail), 500);
  });
}else

    return new Promise((resolve) => {
      setTimeout(() => resolve(itemsData), 500);
    });
  }

  export default getProductos;
