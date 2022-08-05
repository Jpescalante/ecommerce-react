import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemCount from "./Components/ItemCount/ItemCount";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer greeting="Bienvenidos"></ItemListContainer>
    </div>
  );
}

export default App;
