/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/**
Este es un componente de entrada reutilizable en React que utiliza reenvío de referencia para permitir el acceso al elemento de entrada desde un componente padre. El componente acepta varias propiedades, como id, label, placeholder, type, extraClass y errors, y las utiliza para renderizar un campo de entrada con una etiqueta y un mensaje de error opcional. Este componente es útil para crear formularios y campos de entrada en una aplicación de React.
 */
import  React from 'react';
/* eslint-disable no-unused-vars */


const Input = React.forwardRef ( ( props, ref )  => {

  const { id, label='Label for', placeholder='', type='text', extraClass, errors=null, ...rest } = props;

  return (
    <div className="mb-3">
      <label htmlFor={ id }
        className="block text-secondary font-bold text-sm tracking-wide"
      >{ label }</label>
      <input type={ type } id={ id } 
        className={`w-full mt-1 p-2 text-secondary outline-none text-base border focus-within:border-secondary transition duration-200 ease-in-out ${ extraClass }`} 
        placeholder={ placeholder }
        { ...rest }
        ref={ ref }
      />
      { errors && <spam className="text-error">{ errors }</spam> }
    </div>
  )
});

export default Input;