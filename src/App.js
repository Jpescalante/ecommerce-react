import './App.css';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {

 
  return (
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer
      greeting="Greeting"/>
      
    </div>
  );
}

export default App;
