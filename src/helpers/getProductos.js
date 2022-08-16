import itemsData from "../data/Data.js";

function getProductos(idUrl) {
if (idUrl === undefined){
  return new Promise((resolve) => {
    setTimeout(() => resolve(itemsData), 500);
  });
}
else
{
  let detail = itemsData.find(element => element.id === idUrl);
  return new Promise((resolve) => {
    setTimeout(() => resolve(detail), 500);
  });
} 
}
  export default getProductos;
