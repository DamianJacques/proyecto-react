import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a Run Shoes"} />
    </div>
  );
}

export default App;
