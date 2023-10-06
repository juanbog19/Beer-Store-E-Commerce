import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, filterType} from ".../store"

export default function TypeFilter() {
    const [input, setInput] = useState(false);

    const types = useSelector((state)=>state.type.beer);

    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(getTypes());
    },[dispatch]);

    const handleFilter = (event)=>{
        dispatch(filterType(event.target.value));
        setInput(!input);
    }

  return (
    <div>
     <legend>Filter By Typee</legend>
     <select onChange={(event)=>handleFilter(event)} defaultValue='default'>
        <option value='default' disabled>
         Filter by type
        </option>
        {types && types?.map((type)=>(
            <option key={type.name} value={type.name}>
                {type.name}
            </option>
        ))}
        </select>    
    </div>
  )
}

