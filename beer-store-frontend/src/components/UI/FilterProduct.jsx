import { useEffect, useState } from "react";
import { getBeers } from "../../store/beersSlice";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../store/searchSlice";


export default function FilterProduct({ onOrderChange, onPriceChange }) {      // vienen del Products 

    const [priceRange, setPriceRange] = useState("all");
    
  const handleOrder = (e) => {
    onOrderChange(e.target.value);
  };  

  const handlePrice = (e) => {
    setPriceRange(e.target.value);
    onPriceChange(e.target.value); // Notifica a Products del cambio en el rango de precios
  };

  return (
    <div className="flex justify-center space-x-4 mb-4">



<div className="flex flex-col items-center">
        <legend>Precios</legend>
        <select onChange={(event) => handlePrice(event)} defaultValue="all">
          <option value="all">Todos los precios</option>
          <option value="0-3">0 - 3</option>
          <option value="3-5">3 - 5</option>
          {/* Agrega más opciones según tus necesidades */}
        </select>
      </div>



      <div className="flex flex-col items-center">
        <legend>Cervezas en orden alfabético</legend>
        <select onChange={handleOrder}>          
          <option value='A-Z'>A-Z</option>
          <option value='Z-A'>Z-A</option>
        </select>
      </div>

    </div>
  )
}