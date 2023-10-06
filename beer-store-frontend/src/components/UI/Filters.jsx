import { useEffect, useState } from "react";
import { filterBeer, getBeers } from "../../store/beersSliceR";
import { useDispatch, useSelector } from "react-redux";

export default function Filters() {
  const dispatch = useDispatch();
  const beers = useSelector((state)=> state.beers)
  const [beer, setBeer] = useState();

useEffect(()=>{
  dispatch(getBeers())
},[dispatch])

const handleChangeBeer = (event)=>{
    dispatch(filterBeer(event.target.value));
    setBeer(!beer);
  }
    
  return (
    <div>
      <legend>Filter by Beer´s type</legend>
        <select onChange={(event)=>handleChangeBeer(event)} defaultValue='default' >
          <option value='default' disabled>Filter By Type</option>
            {beers &&
            beers?.map((beer)=>(
                <option key={beer.id} value={beer.name}>
                    {beer.name}
                </option>
            ))}
        </select>
    </div>
  )
}










// import { useEffect, useState } from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import { getBrands } from '../../store/brandsSliceR';
// import { brandsFilter } from '../../store/filterBrandsSliceR';

// export default function Filters() {
// const dispatch = useDispatch();

// const [input, setInput] =useState('');

// const brands = useSelector((state)=> state.brands.brands);

// useEffect(()=>{
//     dispatch(getBrands());
// },[dispatch])

// const handleBrandsFilter = (evento)=>{
//     const selectedValue = evento.target.value;
//     setInput(selectedValue);
//     if(evento.target.value === 'default'){
//         dispatch(getBrands());
//     }else{
//         dispatch(brandsFilter(selectedValue));
//     }}
    
//   return (
//     <div>
//         <select onChange={handleBrandsFilter} value={input} >
//             <option value='default'>Filter By Brand</option>
//             {brands?.map((brand)=>(
//                 <option key={brand.id} value={brand.name}>
//                     {brand.name}
//                 </option>
//             ))}
//         </select>
//     </div>
//   )
// }
//filterrr como estaba antes

<<<<<<< HEAD
// export default function Filters() {
//       return (
//     <div>      
//         <div>
        
//         <select>
//             <option disabled>Order By Price</option>
//             <option value="$1-$5">$1-$5</option>
//             <option value="$5-$10">$5-$10</option>
//             <option value="$10-$15">$10-$15</option>
//             <option value="$15-$20">$10-$15</option>
//         </select>
//         {/* <TypeFilter /> */}
//         {/* <select>
//             <option disabled>Order By Type</option>
          
//         </select> */}
//     </div>
//     </div>
//   )
// }
=======

export default function Filters() {
      return (
    <div>      
        {/* <div>
        <select>
            <option disabled>Filter By Brands</option>
            <option value="Antares">Antares</option>
            <option value="Patagonia">Patagonia</option>
            <option value="Corona">Corona</option>
            <option value="Brahma">Brahma</option>
            <option value="Quilmes">Quilmes</option>            
        </select>

        <select>
            <option disabled>Order by Alphabetic</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
        </select>

        <div>
        
        <select>
            <option disabled>Order By Price</option>
            <option value="menor a mayor">menor a mayor</option>
            <option value="mayor a menor">mayor a menor</option>
        </select>

        <select>
            <option disabled>Order By Type</option>
            <option value="IPA">IPA</option>
            <option value="STOUT">STOUT</option>
            <option value="RED">RED</option> 
            <option value="LAGER">LAGER</option> 
            <option value="PALE ALE">PALE ALE</option> 
            <option value="KOLSCH">KOLSCH</option> 
            <option value="HIBRIDA">HIBRIDA</option>  
        </select>
    </div> */}
    </div>
  )
}
>>>>>>> 942c9c9a42b0e1b2352890ea6ddf56812ad2dbea
