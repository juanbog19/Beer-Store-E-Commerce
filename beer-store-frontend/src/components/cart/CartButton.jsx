/* Este componente es responsable de renderizar el botón del carrito de compras. Utiliza el componente NavLink de react-router-dom para redirigir al usuario a la página de checkout cuando se hace clic en el botón.
El componente utiliza el hook useSelector de react-redux para obtener el estado actual del carrito de compras desde el store.
Luego, se determina la cantidad de elementos en el carrito y se verifica si hay elementos o no.
Dependiendo de si hay elementos en el carrito, se renderiza el ícono del carrito con un número indicando la cantidad de elementos.
El estilo del botón se define utilizando clases CSS condicionales, dependiendo de si el botón está activo o no.
*/
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcon from "../svg/CartIcon";

const CartButton = () => {
  const items = useSelector((state) => state.cart.items);
  const cant = items.length;
  const hasItems = cant > 0 ? true : false;

  const btn =
    "flex justify-around inline-block border border-black px-4 py-1 hover:border-transparent hover:bg-primary hover:text-white";

  const btnActive =
    "flex justify-around inline-block border border-primary text-primary px-4 py-1";

  return (
    <NavLink
      to="/checkout"
      className={({ isActive }) => (isActive ? btnActive : btn)}
    >
      <span className="w-6 h-6">
        <CartIcon item={hasItems} />
      </span>
      <span>{cant}</span>
    </NavLink>
  );
};

export default CartButton;
