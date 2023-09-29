import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from '../../store/searchSlice';

const SearchBar = () => {   
    const [brand, setBrand] = useState('');
    const dispatch = useDispatch();
    // console.log(brand);

    const handleInputChange = (event) => {
        setBrand(event.target.value);
    };

    const handleOnClick = () => {
        if (!brand) {
            alert('Input empty !');
        } else {
            dispatch(getBrands(brand));
            setBrand('');           
        } 
    };
  
 
    return(
        <div>
            <input value={brand} onChange={handleInputChange} type='search' placeholder='Your favorite brand here'/>            
            <button onClick={handleOnClick}>Search</button>            
        </div>
    )
};

export default SearchBar;