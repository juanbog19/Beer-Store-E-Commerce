import { useEffect, useState } from "react";
import { getBeers } from "../../store/beersSlice";
import { useDispatch, useSelector } from "react-redux";

const FiltersHome = () => {
  const dispatch = useDispatch();
  const beersSearch = useSelector((state) => state.beers.beersSearch)
  const [inputType, setByType] = useState();
  const [inputPrice, setByPrice] = useState();

  useEffect(() => {
    dispatch(getBeers());
  }, [dispatch])

  const handleChangeType = (event) => {
    dispatch(setByType(event.target.value));
    setByType(!inputType);
  }

  const handleChangePrice = (event) => {
    dispatch(setByPrice(event.target.value));
    setByPrice(!inputPrice);
  }
    return (
  <div className="flex justify-center space-x-4 mb-4">      
      <div className="flex flex-col items-center">
        <legend>Beers by Type</legend>
        <select onChange={(event) => handleChangeType(event)}> {/* Connect to handleChangeType */}
          <option value="">Filter by Type</option> {/*TYPE CREATION ON STRAPI REQUIRED*/}

          <option value="Value">Type1</option> {/* Add actual beer types */}
        </select>
      </div>
      <div>
        <legend>By Price</legend>
        <select onChange={(event) => handleChangePrice(event)}> {/* Connect to handleChangePrice */}
        <option>Filter by Price</option>
          {beersSearch &&
            beersSearch?.map((p) => (
              <option key={p.id} value={p.price}>
                {p.price}
              </option>
            ))}
        </select>
      </div>

      <div>
        <legend> Alphabetic order</legend>
      <select>
          <option disabled>Filtrar por orden alfabetico</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
      </select>
      </div>

  </div>
)
}
export default FiltersHome