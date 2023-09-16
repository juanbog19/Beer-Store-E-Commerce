/* eslint-disable react/prop-types */
/**
Este es un componente de botón en React que utiliza React Router para crear un enlace si se proporciona una ruta (prop "to"), de lo contrario, crea un botón normal. El componente acepta varias propiedades como "type" (tipo de botón), "onClick" (manejador de eventos de clic), "label" (etiqueta del botón), "disabled" (habilitar o deshabilitar el botón), "full" (ancho completo del botón), "extraClass" (clases CSS adicionales) y "outlined" (estilo de botón con borde). El componente aplica diferentes estilos y clases CSS según las propiedades proporcionadas. Si se proporciona una ruta, se crea un enlace utilizando el componente Link de React Router, de lo contrario, se crea un botón normal.
 */
import { Link } from "react-router-dom";

const Button = ( props ) => {

  const {
    type = "button",
    to = false,
    onClick,
    label = "Btn",
    disabled = false,
    full = false,
    extraClass,
    outlined = false,
  } = props;

  const classBtn = `${
    outlined ? "hover:text-white" : "bg-primary text-white"
  } px-5 py-2 border border-primary hover:bg-secondary ${full ? "w-full" : ""} ${
    disabled ? "opacity-25" : "opacity-100"
  } ${extraClass}`;

  if (to) {
    return (
      <Link to={to} className={ classBtn }>
        {label}
      </Link>
    );
  }

  return (
    <button 
      type={ type } 
      onClick={ onClick }
      disabled={ disabled }
      className={ classBtn }>
        { label }
    </button>
  )
}

export default Button;