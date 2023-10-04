/**
El siguiente código es un componente de React llamado "Home" que muestra una lista de marcas de cerveza. El componente utiliza los hooks useState y useEffect para manejar el estado de las marcas, el estado de carga y el estado de error. 

El useEffect se utiliza para realizar una solicitud HTTP GET a la API "/api/brands?populate=*" utilizando axios. Cuando se obtiene una respuesta exitosa, se actualiza el estado de las marcas con los datos obtenidos y se establece el estado de carga en falso. Si se produce un error durante la solicitud, se establece el estado de error en verdadero.

Si el estado de carga es verdadero, se muestra un componente de "Spinner" para indicar que la carga está en curso. Si el estado de error es verdadero, se muestra un mensaje de error y un componente de "HasError".

Si no hay errores ni carga en curso, se muestra una lista de tarjetas de marca utilizando el componente "BrandCard". Si no hay datos de marcas disponibles, se muestra un mensaje que indica que no hay datos de cerveza disponibles.

En general, este componente se utiliza para mostrar una lista de marcas de cerveza obtenidas de una API y manejar los estados de carga y error.
*/
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import axiosURL from "../../tools/axiosInstance";
import BrandCard from "./../UI/BrandCard";
import Spinner from './../svg/Spinner';
import HasError from "./../svg/HasError";
import Footer from "./Footer";
import FilterHome from '../UI/FilterHome';
import Banner from "../UI/Banner";
import { getBanner } from '../../store/bannerSlice';

const Home = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

//   const [slides, setSlides] = useState()
//   const dispatch = useDispatch();

//   const { data } = useSelector(state=>state.banner.banner);
  
//   useEffect(()=>{
//     dispatch(getBanner())
//     setSlides(data)
//   },[])

//  console.log('log de slides',slides);

//  console.log('log de brands',brands);


  useEffect(() => {
    // let isCancelled = false;
    const controller = new AbortController();
    setLoading(true);
    axiosURL
      .get("/api/brands?populate=*", {
        signal: controller.signal,
      })
      .then((response) => {
        // if ( !isCancelled ) {
        // console.log(response);
        setBrands( response.data.data );
        setLoading( false );
      // }
    }).catch((error) => {
     // console.log(error);
      if ( axios.isCancel( error ) ) {
       // console.log( 'request canceled' );
        return;
      }
      setHasError( true );
      setLoading( false );
    });
    return () => {
      // isCancelled = true;
      controller.abort();
    }
  },[]);

  if ( loading ) {
    return (
      <div className="w-24 mx-auto">
        <Spinner />
      </div>
    );
  }

  if ( hasError ) {
    return (
      <div>
        <h1 className="text-2xl text-gray-700 uppercase text-center mb-3">404</h1>
        <h2 className="text-stone-600 text-center mb-2">Please try again later</h2>
        <HasError />
      </div>
    );
  }

  
 

  return (
    <>
    <div>
      
      <div>
      <FilterHome></FilterHome>
      </div>
       <div className="flex justify-around flex-wrap">
        {brands.map((brand) => (
          <BrandCard key={brand.id} data={brand} />
        ))}
        {brands.length <= 0 && <p>No beer data disponible</p>}
      </div>
      <div>
        <Banner 
        //slides={slides} 
        />
      </div>
      </div>
    </>
  )
}

export default Home;