import React from "react";
import Zapatilla1 from "../components/images/Zapatilla.jpg"
import Zapatilla2 from "../components/images/Zapatilla2.jpg"
import Zapatilla3 from "../components/images/Zapatilla3.jpg"

const ItemListContainer = ({ greeting }) => {
  return (
    <div >
      <h1>{greeting}</h1>
      <div className="p-4 m-auto">
      <img src={Zapatilla1} alt="Zapatilla1" />
      <img src={Zapatilla2} alt="Zapatilla2" />
      <img src={Zapatilla3} alt="Zapatilla3" />
      </div>
    </div>
  );
};

export default ItemListContainer;
