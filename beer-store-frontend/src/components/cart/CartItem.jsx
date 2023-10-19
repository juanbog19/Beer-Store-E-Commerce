/* eslint-disable react/prop-types */
/*
El componente CartItem es un componente de React que muestra un elemento del carrito de compras. Recibe las siguientes propiedades: name (nombre del producto), price (precio del producto), quant (cantidad del producto en el carrito), id (id del producto) e img (imagen del producto). El componente muestra la información del producto, como el nombre, el precio unitario y la cantidad. También muestra botones para eliminar el producto del carrito o agregar más unidades. Finalmente, muestra el total del producto multiplicando el precio unitario por la cantidad. El componente utiliza el hook useDispatch de react-redux para enviar acciones al store y utiliza las acciones addItem y removeItem del slice cartSlice para agregar o eliminar elementos del carrito.
*/
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../store/cartSlice";
import Swal from 'sweetalert2';

const CartItem = (props) => {
  const { name, price, quant, id, img } = props;
  const totalItem = price * quant;
  const dispatch = useDispatch();

  const add = () => {

    dispatch(addItem({ ...props, amount: 1 }));
  };

  const remove = () => {
    dispatch(removeItem(id));
  };

  return (
    <li className="flex justify-between pb-2 my-2 border-b border-secondary">
      <div className="flex">
        {img ? (
          <img
            src={img.url}
            alt={name}
            className={`w-16 h-16 rounded-full shadow-lg mr-2`}
          />
        ) : (
          <p>Missing img</p>
        )}

        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <div className="text-stone-600 text-sm">Unit: ${price}</div>
          <button
            className="font-semibold text-sm text-stone-900 hover:text-primary"
            onClick={remove}
          >
            Remove
          </button>
          <button
            className="font-semibold text-sm text-stone-900 hover:text-primary ml-1"
            onClick={add}
          >
            Add
          </button>
        </div>
      </div>

      <div className="text-right grid content-end">
        <span className="uppercase tracking-wide text-gray-700 text-xs font-bold">
          Amount x ( {quant} )
        </span>
        <span className="text-semibold text-lg text-primary">${totalItem}</span>
      </div>
    </li>
  );
};

export default CartItem;
