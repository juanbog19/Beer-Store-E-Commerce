import { useEffect, useState } from "react";
import { getBeers, setByPrice, setByType } from "../../store/beersSlice";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../store/searchSlice";
import { setByOrderAlphabetic, setFiltro } from "../../store/brandFilterSlice";
//import {brandsSearch} from "../../store/searchSlice";
//import {beersSearch} from "../../store/beersSlice";

export default function Filters() {
  const dispatch = useDispatch();

  const beersSearch = useSelector((state) => state.beers.beersSearch)
  const brandsSearch = useSelector((state)=>state.brands.brandsSearch)
  //const brandsList = useSelector((state) => state.brandsList);
  //const filtro = useSelector((state) => state.filtro);

  const [inputType, setInputType] = useState();
  const [inputPrice, setInputPrice] = useState();

  const [brand, setBrand] = useState();
  const [option, setOption] = useState();   //estado local p/filterByOrderAlphabetic

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getBeers());
  }, [dispatch])


  const handleChangeType = (event) => {
    dispatch(setByType(event.target.value));
    setInputType(!inputType);
  }

  const handleChangePrice = (event) => {
    dispatch(setByPrice(event.target.value));
    setInputPrice(!inputPrice);
  }

  // const handleChangeBrands = (event) => {
  //   setBrand(event.target.value);
  //   dispatch(getBrands(brandInput));
  //   // setBrand(!brand);
  // }
  const handleChangeBrands = (event) => {
    dispatch(setFiltro(event.target.value));
    setBrand(event.target.value)   
  }

  const handleChangeABC = () => {
   if(option ===   "Filter by alphabetic"){
    dispatch(getBrands())
   }
   dispatch(setByOrderAlphabetic(option))
  }

    // const handleChangeABC = (event) => {
  //   event.preventDefault();
  //   dispatch(setByOrderAlphabetic(event.target.value))
  //   setInputAbc(!inputAbc);
  // }



  return (
    <div className="flex justify-center space-x-4 mb-4">
      <div className="flex flex-col items-center">
        <legend>Tipos de cerveza</legend>
        <select onChange={(event) => handleChangeType(event)} defaultValue="default">
          <option value="default" disabled>Filtrar por tipo</option>
          {beersSearch &&
            beersSearch?.map((typ) => (
              <option key={typ.id} value={typ.type}>
                {typ.type}
              </option>
            ))}
        </select>
      </div>

      <div className="flex flex-col items-center">
        <legend>Precios</legend>
        <select onChange={(event) => handleChangePrice(event)} defaultValue="default">
          <option>Filtrar por precio</option>
          {beersSearch &&
            beersSearch?.map((pric) => (
              <option key={pric.id} value={pric.price}>
                {pric.price}
              </option>
            ))}
        </select>
      </div>

      <div className="flex flex-col items-center">
        <legend>Marcas</legend>
        <select onChange={(event) => handleChangeBrands(event)} value={brand}>
          <option value="default">Filtrar por marca</option>
          {brandsSearch?.map((brand) => (
              <option key={brand.id} value={brand.name}>
                {brand.name}
              </option>
            ))}
        </select>
      </div>

      <div className="flex flex-col items-center">
        <legend>Marcas en orden alfabético</legend>
        <select onClick={handleChangeABC} defaultValue={"Filter by alphabetic"} onChange={(event) => setOption(event.target.value)}>
          <option value={"Filter by alphabetic"}>Filtrar en orden alfabético</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
    </div>
  )
}





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
//=======

//export default function Filters() {
//   return (
// <div>      
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
//     </div>
//   )
// }
// >>>>>>> 942c9c9a42b0e1b2352890ea6ddf56812ad2dbea
