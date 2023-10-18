import { useEffect, useState } from "react";
import { getBeers } from "../../store/beersSlice";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../store/searchSlice";


export default function Filters({ onOrderChange }) {      // vienen del Home 

  const handleOrder = (e) => {
    onOrderChange(e.target.value);
  };  

  return (
    <div className="flex justify-center space-x-4 mb-4">
      <div className="flex flex-col items-center">
        <legend>Marcas en orden alfabético</legend>
        <select onChange={handleOrder}>
          <option value={"Filter by alphabetic"}>Filtrar en orden alfabético</option>
          <option value='A-Z'>A-Z</option>
          <option value='Z-A'>Z-A</option>
        </select>
      </div>
    </div>
  )
}