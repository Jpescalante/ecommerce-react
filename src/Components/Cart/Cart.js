import CartItem from "../CartItems/CartItem";
import { useContext } from "react";
import { cartContext } from "../../store/cartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

import "./Cart.css";

function Cart(id) {
  const {
    cart,
    removeItem,
    removeAll,
    totalPrice,
    totalAmount,
    plusCart,
    subCart,
  } = useContext(cartContext);
  function removeItemCart() {
    removeItem(id);
  }
  function plusItemCart() {
    plusCart(id);
  }
  function subItemCart() {
    subCart(id);
  }
  if (cart.length === 0) {
    return (
      <main>
        <div className="emptyCartContainer">
          <div className="titleEmptyContainer">
            <h1>Carrito Vacío</h1>
          </div>
          <span>
            <FontAwesomeIcon className="emptyCart" icon={faCartArrowDown} />
          </span>
          <Link to={"/"}>
            <button className="cartResumeButtons">Ir a Comprar </button>
          </Link>
        </div>
      </main>
    );
  } else {
    return (
      <main className="mainCart">
        <section className="sectionCartItem">
          {cart.map((item) => {
            return (
              <CartItem
                key={item.id + item.name}
                img={item.image}
                name={item.name}
                price={item.price * item.amount}
                amount={item.amount}
                stock={item.stock - item.amount}
                removeItemCart={removeItemCart}
                plusItemCart={plusItemCart}
                subItemCart={subItemCart}
              />
            );
          })}
          <button className="cartDeleteAll" onClick={removeAll}>
            {" "}
            Vaciar Carrito{" "}
          </button>
        </section>
        <section className="cartResume">
          <h1 className="titleResume">Resumen del Pedido</h1>
          <h3 className="resume">Cantidad de Productos: {totalAmount()}</h3>
          <h2 className="totalResume">Total: $ {totalPrice()}</h2>
          <div className="containerButtonsResume">
            <Link to={"/"}>
              <button className="cartResumeButtons">Seguir Comprando </button>
            </Link>
            <Link to={"/checkout"}>
              <button className="cartResumeButtons">Finalizar Compra </button>
            </Link>
          </div>
        </section>
      </main>
    );
  }
}

export default Cart;
