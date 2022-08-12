// Imports Css
import "bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"

// Imports Components
import NavBar from "./Components/navbar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import PaymentListContainer from "./Components/paymentListContainer/PaymentListContainer";
import ItemDetailContainer from  "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />

      <ItemListContainer title="Ofertas del día" />
      <ItemDetailContainer></ItemDetailContainer>

      <PaymentListContainer title="Nuestros Medios de Pago" />
    </div>
  );
}

export default App;
