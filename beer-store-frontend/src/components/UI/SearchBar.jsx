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
				<input value={brand} onChange={handleInputChange} type='search' placeholder='Your favorite brand here' />
				<button className='bg-primary px-8 py-2 text-gray-100 hover:bg-secondary' onClick={handleOnClick}>
					Search
				</button>
                <button className='bg-primary px-8 py-2 text-gray-100 hover:bg-secondary' onClick={handlerReset}>
                    Reset
                </button>
			</div>
		);
};

export default SearchBar;