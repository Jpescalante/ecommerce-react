// Imports Css
import "bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Imports Components
import NavBar from "./Components/navbar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import PaymentListContainer from "./Components/paymentListContainer/PaymentListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/"element={<ItemListContainer/>}/>
          <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
          <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>

        </Routes>
        <PaymentListContainer title="Nuestros Medios de Pago" />
      </BrowserRouter>
    </div>
  );
}

export default App;
