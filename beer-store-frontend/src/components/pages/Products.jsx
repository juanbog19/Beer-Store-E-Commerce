/**
El componente "Products" muestra los productos de una marca específica. Utiliza el hook useState para manejar el estado de la marca, hasError y loading. También utiliza el hook useEffect para realizar una solicitud GET a la API y obtener los datos de la marca y sus productos. Si hay un error en la solicitud, se muestra un mensaje de error. Si la carga está en progreso, se muestra un spinner. Si no se encuentra la marca o no hay productos disponibles, se muestra un mensaje correspondiente. Finalmente, se muestra la lista de productos de la marca y un enlace para volver a la página de inicio.
*/
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import axiosURL from "../../tools/axiosInstance";
import ProductItem from "../UI/ProductItem";
import Section from "../UI/Section";
import qs from 'qs';
import HasError from "../svg/HasError";
import Spinner from "../svg/Spinner";
import FiltersHome from "../UI/FilterHome";


const Products = () => {
  const params = useParams();
  const [ brand, setBrand ] = useState( null );
  const [ hasError, setHasError ] = useState( false );
  const [ loading, setLoading ] = useState( false );
  const id = params.id;

  const query = qs.stringify({
    populate:{
      img:{
        populate:'*',
      },
      beers:{
        populate:'*',
      }
    }
  },{
    encodeValuesOnly:true,
  });

  // console.log(query);

  useEffect(() => {
    const controller = new AbortController();
    setLoading( true );
    axiosURL.get(`/api/brands/${id}?${query}`,{
      signal:controller.signal
    })
    .then(( response ) => {
      // console.log( response );
      setBrand( response.data.data );
      setLoading( false );
    }).catch(( error ) => {
      console.log( error );
      if ( axios.isCancel( error ) ) {
        console.log( 'request canceled' );
        return;
      }
      setHasError( true );
      setLoading( false );
    });
    return () => {
      controller.abort();
    }
  },[id, query]);

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
        <h1 className="mb-3 text-2xl text-center text-gray-700 uppercase">404</h1>
        <h2 className="mb-2 text-center text-stone-600">Please try again later</h2>
        <HasError />
      </div>
    );
  }

  if ( !brand ) {
    return (
    <>
      <div className="text-center">
        <p>Products not found</p>
        <Link className="btn-primary" to='/'>Back to Home</Link>
      </div>
    </>
    );
  }

  const productsList = brand.beers;

  return (
    <>
    <FiltersHome />
      <div className="mb-3 text-center">
        {/* <div className={ `w-24 h-24 rounded-full ${ brand.img } mx-auto shadow-lg` }></div> */}
        <img
          src={brand.img.url}
          alt={`logo of ${brand.name}`}
          className="w-24 h-24 mx-auto rounded-full shadow-lg"
        />
        <h1 className="text-gray-700 uppercase text-2x1">{brand.name}</h1>
        <p className="my-2 font-semibold test-sm text-stone-600">{ brand.description }</p>
      </div>

      <Section>
        <ul>
          {productsList.map((product) => (
            <ProductItem key={product.id} data={product} />
          ))}
        </ul>
        { productsList.length <= 0 && <div className="text-center">No beer were found</div> }
      </Section>

      <div className="mt-3 text-center">
        <Link
          className="px-2 py-1 text-gray-100 bg-primary hover:bg-secondary"
          to="/home"
        >
          Regresar
        </Link>
      </div>
    </>
  );
}

export default Products;