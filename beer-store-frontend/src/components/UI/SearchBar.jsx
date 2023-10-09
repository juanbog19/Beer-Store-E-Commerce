import React, { useState } from "react";
import { useDispatch } from "react-redux";
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

    const handlerReset = () => {
        
        setBrand('');
        dispatch(getBrands())
    };
  
 
    return (
			<div>
				<input value={brand} onChange={handleInputChange} type='search' placeholder='Buscar...' className="px-8 py-2 border-black rounded-lg"/>
				<button className='px-3 py-2 ml-1 text-gray-100 rounded-lg bg-primary hover:bg-secondary' onClick={handleOnClick}>
					Buscar
				</button>
                <button className='px-4 py-2 ml-1 text-gray-100 rounded-lg bg-primary hover:bg-secondary' onClick={handlerReset}>
                    Recargar
                </button>
                {/* <button className='px-8 py-2 ml-1 text-gray-100 rounded-lg bg-primary hover:bg-secondary' onClick={handlerReset}>
                    <Link to={'/home'}>
                    Home
                    </Link>
                </button> */}
			</div>
		);
};

export default SearchBar;