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
    <div className="flex justify-around flex-wrap">
       {Object.keys(beer).length > 0 ? ( // Verifica si 'beer' contiene datos
          console.log(Object.keys(beer)),
          <>
           {/*<img
          src={beer.img.url}
          alt={`logo of ${beer.name}`}
          className="w-24 h-24 rounded-full mx-auto shadow-lg"
        />*/}
            <h2>Beer: {beer.data.name}</h2>
            <p>Description: {beer.data.description}</p>
            
            
          </>
        ) : (
            <Spinner></Spinner>
            )}
             <Link
          className="bg-primary px-8 py-2 text-gray-100 hover:bg-secondary uppercase"
          to={`/products/${id}`}
        >
          Buy beer
        </Link>
    </div>
  );

 }
 export default Detail;