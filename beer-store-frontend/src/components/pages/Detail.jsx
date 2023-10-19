import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import axiosURL from "../../tools/axiosInstance";
import Spinner from "../svg/Spinner";
import { Link } from "react-router-dom";
import qs from 'qs';

const Detail = ()=>{

  const [beer, setBeer] = useState({});
  const {id} = useParams();

  const query = qs.stringify({
    populate:{
      img:{
        populate:'*',
      }
    }
  },{
    encodeValuesOnly:true,
  });


  useEffect(() => {    
    axiosURL.get(`/api/beers/${id}?${query}`)
    .then(( response ) => {
      // console.log( response );
      setBeer( response.data.data );      
    }).catch(( error ) => {
      console.log( error );
    });    
  },[id, query]);


  return(
    <div className="flex flex-wrap justify-around p-4">
        {Object.keys(beer).length > 0 ? ( // Verifica si 'beer' contiene datos
          console.log(Object.keys(beer)),
          <>
           {/*<img
          src={beer.img.url}
          alt={`logo of ${beer.name}`}
          className="w-24 h-24 mx-auto rounded-full shadow-lg"
        />*/}<img
          src={beer.img} 
          alt={`logo of ${beer.name}`}
          className="w-32 h-32 mx-auto mb-3 rounded-full shadow-xl"
        />
        
            <h2  className="text-3xl font-semibold text-gray-800">Beer: {beer.name}</h2>
            <p  className="mt-2 font-serif text-lg italic font-light text-gray-600">Description: {beer.description}</p>
            
            
          </>
        ) : (
            <Spinner></Spinner>
            )}
             <Link
          className="px-8 py-2 text-gray-100 uppercase bg-primary hover:bg-secondary"
          to={`/products/${id}`} //creo que no funciona bien porque el codigo interpreta que es el id de la beer en lugar de ser el id de la brand
        >
          Comprar Cerveza
        </Link>
    </div>
  )
}

 export default Detail;