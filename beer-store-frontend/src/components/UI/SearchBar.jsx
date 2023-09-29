import React, { useState, useEffect } from "react";
import axios from "../../tools/axiosInstance";

const SearchBar = () => {   

//   const [brand,setBrand] = useState('');
//   const [searchedBrand, setSearchedBrand] = useState('');

//   const handleInputChange=(event) => {
//     setBrand(event.target.value);
// };

//   const handleOnClick = () => {
//     if (!brand) {
//       alert('Input empty !');
//     } 
//     else {
//       axios.get(`/api/brands?filters[name][$containsi]=${brand}`)
//         .then((response) => {
//           // Actualiza el estado de la marca buscada en Home
//           setSearchedBrand(brand);
//           setBrand('');
//         })
//         .catch((error) => {
//           console.error('Error al cargar brands:', error);
//         });
//     }
//   }

//   console.log(searchedBrand);
  
 
    return(
        <div>
            <input  type='search' placeholder='Your favorite brand here'/>            
            <button >Search</button>            
        </div>
    )
};

export default SearchBar;