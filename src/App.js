// Imports Css
import "bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Imports Components
import NavBar from "./Components/navbar/NavBar";
import ItemListContainer from "./Components/itemListContainer/ItemListContainer";
import PaymentListContainer from "./Components/paymentListContainer/PaymentListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Components/checkout/checkout";

import Cart from "./Components/cart/Cart";
import { CartProvider } from "./store/cartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:idCategory"
              element={<ItemListContainer />}
            />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Routes>
          <PaymentListContainer title="Nuestros Medios de Pago" />
          <ToastContainer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
