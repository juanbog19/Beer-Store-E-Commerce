/* eslint-disable react/prop-types */
/**
Este componente representa una tarjeta de marca que se utiliza para mostrar información sobre una marca en particular.
Recibe los datos de la marca a través de las props y muestra el nombre, la imagen, la descripción y un enlace para visitar la tienda de la marca.
La imagen se muestra utilizando la URL y el texto alternativo proporcionados en los datos de la marca.
Al hacer clic en el enlace, se redirige al usuario a la página de productos de la marca correspondiente.
El componente utiliza clases de CSS para dar estilo a la tarjeta y los diferentes elementos dentro de ella.
 */
import { Link } from "react-router-dom";

const BrandCard = ( props ) => {
  const { id, name, img, description } = props.data;
  return (
    <>
      <div className="px-5 py-10 mb-10 font-semibold text-center bg-white border rounded-lg shadow-lg w-80">
        {/* <div className={ `w-32 h-32 ${ img } shadow-xl rounded-full mb-3 mx-auto` }></div> */}
        <img
          src={img.url}
          alt={img.alternativeText}
          className="w-32 h-32 mx-auto mb-3 rounded-full shadow-xl"
        />
        <h1 className="mt-3 mb-4 text-lg text-gray-700 font-abril">{name}</h1>
        <p className="mt-4 mb-8 text-sm text-gray-400 font-abril">{ description }</p>
        <Link
          className="px-8 py-2 text-gray-100 uppercase bg-primary hover:bg-secondary font-abril"
          to={`/products/${id}`}
        >
          Ver más
        </Link>
      </div>
    </>
  );
}

export default BrandCard;