import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../tools/axiosInstance";
import Spinner from "../svg/Spinner";
import { Link } from "react-router-dom";

function Detail() {
 
    const [beer, setBeer] = useState({});
    const {id} = useParams();
  
 useEffect(() =>{
    axios
    .get(`/api/beers/${id}`)
    .then(response => {
        console.log(response.data);
        setBeer(response.data);
      })
      .catch(error => {
        console.error('Error al cargar los detalles de la cerveza:', error);
      });
  }, [id]);

  return (
    <div className="flex flex-wrap justify-around p-4">
       {Object.keys(beer).length > 0 ? ( // Verifica si 'beer' contiene datos
          console.log(Object.keys(beer)),
          <>
           {/*<img
          src={beer.img.url}
          alt={`logo of ${beer.name}`}
          className="w-24 h-24 mx-auto rounded-full shadow-lg"
        />*/}<img
          src={beer.url} 
          alt={`logo of ${beer.name}`}
          className="w-32 h-32 mx-auto mb-3 rounded-full shadow-xl"
        />
        
            <h2  className="text-3xl font-semibold text-gray-800">Beer: {beer.data.name}</h2>
            <p  className="mt-2 font-serif text-lg italic font-light text-gray-600">Description: {beer.data.description}</p>
            
            
          </>
        ) : (
            <Spinner></Spinner>
            )}
             <Link
          className="px-8 py-2 text-gray-100 uppercase bg-primary hover:bg-secondary"
          to={`/products/${id}`}
        >
          Buy beer
        </Link>
    </div>
  );

 }
 export default Detail;