import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { cartContext } from "../../store/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import firestoreDB from "../../services/firebase";
import "./Checkout.css";

function Checkout() {
  const { cart, totalPrice, clearCart } = useContext(cartContext);
  // Estado del comprador
  const [userBuyer, setUserBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });
  // Estado de la orden de compra
  const [orderFirebase, setOrderFirebase] = useState({
    id: "",
    complete: false,
  });
  // Informacion que se va almacernar en el estado de orden de compra
  const purchaseOrder = {
    buyer: { ...userBuyer },
    items: [...cart],
    total: totalPrice(),
    date: new Date(),
  };
  // Cargar los datos a firebase
  async function handleSubmit(e) {
    e.preventDefault();
    const collectionRef = collection(firestoreDB, "orders");
    const order = await addDoc(collectionRef, purchaseOrder);
    setOrderFirebase({ id: order.id, complete: true });
    clearCart();
  }
  // Funcion para setear los values de los imputs y guardarlos en el estado del comprador
  function inputChangeHandler(e) {
    const input = e.target;
    const value = input.value;
    const inputName = input.name;
    let copyUserData = { ...userBuyer };
    copyUserData[inputName] = value;
    setUserBuyer(copyUserData);
  }
  if (orderFirebase.complete === true) {
    return (
      <main className="mainCheckOut">
        <div className="thankYouContainer">
          <FontAwesomeIcon className="checkIcon" icon={faCircleCheck} />
          <h1 className="titleThankYou">Compra exitosa!</h1>
          <h2 className="subtitleThankYou">
            Gracias por confiar en Mercado de Bebidas {userBuyer.name}
          </h2>
          <h3 className="detailCheckOut">
            En instante recibirá el detalle de su pedido en la siguiente
            dirección: {userBuyer.email}
          </h3>
          <h3 className="detailCheckOut">
            El id de seguimiento de tu compra es: {orderFirebase.id}
          </h3>
          <Link to={"/"}>
            {" "}
            <button className="buttonThankYou">Seguir Comprando</button>
          </Link>
        </div>
      </main>
    );
  } else {
    return (
      <main className="mainCheckOut">
        <div className="checkoutContainer">
          <h1 className="title">Finalizar Compra</h1>
          <form className="formContainer" onSubmit={handleSubmit}>
            <legend className="label">Completa los datos y es tuya!</legend>
            <label className="label" htmlFor="name">
              Nombre
            </label>
            <input
              className="formInput"
              type="text"
              name="name"
              value={userBuyer.name}
              onChange={inputChangeHandler}
              placeholder="Ingrese nombre y apellido"
              required
            ></input>
            <label className="label" htmlFor="phone">
              Teléfono
            </label>
            <input
              className="formInput"
              type="number"
              name="phone"
              value={userBuyer.phone}
              onChange={inputChangeHandler}
              placeholder="Ingrese su teléfono"
              required
            ></input>
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="formInput"
              type="email"
              name="email"
              value={userBuyer.email}
              onChange={inputChangeHandler}
              placeholder="Ingrese su correo electrónico"
              required
            ></input>
            <input className="buttonForm" type="submit" value="Comprar"></input>
          </form>
        </div>
      </main>
    );
  }
}

export default Checkout;
