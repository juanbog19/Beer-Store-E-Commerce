/**
Este componente representa la página de checkout de la tienda en línea. Utiliza el estado local y el selector de Redux para obtener los elementos del carrito, el total y la información de inicio de sesión. También utiliza componentes como CartItem, CartIcon, Button, Modal y FormCart para mostrar y manejar la información del carrito y el proceso de pago. Si el carrito está vacío, se muestra un mensaje indicando que está vacío y se ofrece un enlace para volver a la tienda. Si el carrito tiene elementos, se muestran los detalles de cada elemento, el total y se ofrece un botón para proceder al pago. Si el usuario ha iniciado sesión, se muestra el botón para proceder al pago, de lo contrario, se muestra un botón para iniciar sesión. Al hacer clic en el botón de pago, se muestra un modal con un formulario para ingresar los datos de pago. Este componente se exporta para su uso en otras partes de la aplicación.
*/
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../cart/CartItem";
import CartIcon from "../svg/CartIcon";
import Button from "../UI/Button";
import Modal from "../cart/Modal";
import FormCart from "../cart/FormCart";

const Checkout = () => {

  const items = useSelector( ( state ) => state.cart.items );
  const total = useSelector( ( state ) => state.cart.total );
  const isLoggedIn = useSelector( ( state ) => state.auth.loggedin );
  const [ showModal, setShowModal ] = useState( false );

  const toggleModal = () => {
    setShowModal( !showModal );
  };

  const cantItems = items.length;
  const hasItems = cantItems > 0 ? true : false;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl text-gray-700 uppercase text-center mb-3">CARRITO DE COMPRAS</h1>

      {!hasItems && (
        <div className="text-center mt-10">
          <h2 className="text-stone-600 mb-2">Tu carrito de compras esta vacío</h2>

          <div className="w-40 mx-auto mb-3 text-stone-00">
            <CartIcon />
          </div>

          <Link
            className="bg-primary px-8 py-2 text-gray-100 hover:bg-secondary"
            to="/"
          >
            Inicio
          </Link>
        </div>
      )}

      {hasItems && (
        <div className="bg-white p-4">
          <p className="text-right">Price</p>
          <ul>
            {items.map(( item ) => (
              <CartItem
                key={ item.id }
                id={ item.id }
                name={ item.name }
                price={ item.price }
                quant={ item.quant }
                img={ item.img }
              />
            ))}
          </ul>

          <div className="text-right">
            <p className="m-0 text-stone-600 text-xs">Cart Items: { cantItems } </p>
            <p className="m-0 mb-2 font-semibold text-lg">
              Total: <span className="text-primary">$ {total}</span>{" "}
            </p>
            {isLoggedIn && (
              <Button label="Procced to payment" onClick={ toggleModal } />
            )}
            {!isLoggedIn && <Button label="Login" to="/login" />}
          </div>
        </div>
      )}
      {showModal && (
        <Modal>
          <h1 className="text-xl text-center mb-5">Data payment</h1>
          <FormCart items={ items } total={ total } toggleModal={ toggleModal } />
        </Modal>
      )}
    </div>
  );
}

export default Checkout;