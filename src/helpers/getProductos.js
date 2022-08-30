import itemsData from "../data/Data.js";
import firestoreDB from "../services/firebase";
import { getDocs, collection, getDoc, doc } from "firebase/firestore";

// function getProductos(idUrl) {
// if (idUrl === undefined){
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(itemsData), 500);
//   });
// }
// else
// {
//   let detail = itemsData.find(element => element.id === idUrl);
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(detail), 500);
//   });
// }
// }
//   export default getProductos;

function getProductos(idUrl) {
  if (idUrl === undefined) {
    return new Promise((resolve) => {
      const bebidasCollection = collection(firestoreDB, "bebidas");

      getDocs(bebidasCollection).then((snapshot) => {
        const docsData = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        resolve(docsData);
      });
    });
  } else {
    return new Promise((resolve) => {
      const bebidasCollection = collection(firestoreDB, "bebidas");
      const docRef = doc(bebidasCollection, idUrl);

      getDoc(docRef).then((snapshot) => {
        resolve({ ...snapshot.data(), id: snapshot.id });
      });
    });
  }
}
export default getProductos;
