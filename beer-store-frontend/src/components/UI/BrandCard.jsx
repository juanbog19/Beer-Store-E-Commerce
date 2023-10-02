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
      <div className="bg-white border shadow-xl py-10 px-3 text-center font-semibold w-80">
        {/* <div className={ `w-32 h-32 ${ img } shadow-xl rounded-full mb-3 mx-auto` }></div> */}
        <img
          src={img.url}
          alt={img.alternativeText}
          className="w-32 h-32 shadow-xl rounded-full mb-3 mx-auto"
        />
        <h1 className="text-lg text-gray-700 mt-3 mb-4">{name}</h1>
        <p className="text-sm text-gray-400 mt-4 mb-8">{ description }</p>
        <Link
          className="bg-primary px-8 py-2 text-gray-100 hover:bg-secondary uppercase"
          to={`/products/${id}`}
        >
          Visit
        </Link>
      </div>
    </>
  );
}

export default BrandCard;