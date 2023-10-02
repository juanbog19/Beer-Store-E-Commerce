/* eslint-disable react/prop-types */
/**
Este componente representa un elemento de producto en la interfaz de usuario de la tienda. Muestra la imagen, el nombre, la descripción y el precio del producto. También permite al usuario agregar el producto al carrito de compras seleccionando la cantidad deseada. Si la cantidad ingresada no es válida (menor a 1 o mayor a 6), se muestra un mensaje de error. Una vez que se ingresa una cantidad válida y se hace clic en el botón "agregar", se envía una acción al store de Redux para agregar el producto al carrito.
 */
import { useRef, useState } from "react";
//import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addItem } from "../../store/cartSlice";

const ProductItem = ( props ) => {
 // const {id} = useParams();
  const dispatch = useDispatch();
  const { img, name, price, description, id } = props.data;
  const [ amountIsValid, setAmountIsValid ] = useState( true );
  const numberInput = useRef( null );

  // const textInput = ( event ) => {
  //   console.log( event.target.value );
  // }

  const addNewItem = ( event ) => {
    event.preventDefault();
    const enterAmount = numberInput.current.value;
    const amount = +enterAmount;

    if ( amount === 0 || amount < 1 || amount > 6 ) {
      setAmountIsValid( false );
      return
    } else {
      setAmountIsValid( true );
    }
    
    const item = { name, price, amount, id, img };
    dispatch( addItem( item ) );
  }

  return (
    <li className="flex justify-between border-b border-secondary my-2">
      <div className="flex">
        {/* <div className={ `w-14 h-14 rounded-full shadow-lg ${ img }` }></div> */}
        <img src={ img.url } alt={ `logo of the beer ${ name }` } className="w-14 h-14 rounded-full shadow-lg" />
        <div className="ml-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <div className="font-light">{description}</div>
          <p className="font-semibold text-lg text-primary">$ {price}</p>
        </div>
      </div>

      <div>
        <form className="text-right" onSubmit={addNewItem} noValidate>
          <div className="mb-2">
            <label
              className="block uppercase text-gray-500 text-xs font-bold mb-2 tracking-wide"
              htmlFor="amopunt"
            >
              Amount
            </label>
            <input
              className="w-12 border border-gray-500 pl-1"
              type="number"
              id="amount"
              max={6}
              min={1}
              defaultValue={1}
              ref={numberInput}
            />
          </div>
          <Link
              className="bg-primary px-1 py-1 mr-2 text-gray-100 hover:bg-secondary"
              to={`/beers/${id}`} // Usar brand.id para construir la ruta
            >
              Detalle
            </Link>

          <button className="bg-primary px-2 py-1 text-gray-100 hover:bg-secondary">
            add
          </button>
          {!amountIsValid && (
            <p className="text-red-800 text-sm mt-2">Please enter a value 1-6</p>
          )}
        </form>
      </div>
    </li>
  );
}

export default ProductItem;