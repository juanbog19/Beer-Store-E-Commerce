/**
Componente de barra de navegación que muestra el logo y los enlaces a las diferentes secciones del sitio web, así como los botones de inicio de sesión, registro y carrito de compras. El botón de inicio de sesión y registro se muestra dependiendo si el usuario ha iniciado sesión o no. Si el usuario ha iniciado sesión, se muestra un componente de usuario con su información. Se utiliza la librería react-router-dom para manejar las rutas de navegación. Se utiliza la librería react-redux para obtener el estado de inicio de sesión del usuario.
 */
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import { authLogout } from "../../store/authSlice";
import Logo from "../svg/Logo";
import CartButton from "../cart/CartButton";
import CardUser from "./CardUser";


const NavBar = () => {

  // const dispatch = useDispatch();
  const isLoggedin = useSelector( ( state ) => state.auth.loggedin );
  const btnLink =
    "block inline-block py-1 px-4 border border-black text-black hover:text-white hover:bg-primary hover:border-transparent cursor-pointer mr-4";
  const activeLink =
    "block inline-block py-1 px-4 border border-primary text-primary mr-4";

  return (
    <header className="pt-0">
      <nav className="flex items-center justify-between bg-accent p-6 mb-2">
        <div className="flex items-center mr-5">
          <Logo />
          <span className="font-semibold text-2xl mx-2">ChatBot Bar</span>
        </div>
        <div className="grow flex items-center">
          <div className="grow">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "btn-primary-active" : "btn-primary"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "btn-primary-active" : "btn-primary"
              }
            >
              About
            </NavLink>
          </div>
          <div className="flex">
            {!isLoggedin && (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "btn-primary-active" : "btn-primary"
                }
              >
                Log in
              </NavLink>
            )}
            {!isLoggedin && (
              <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? activeLink : btnLink)}
              >
                Sign Up
              </NavLink>
            )}
            {isLoggedin && <CardUser />}
            <CartButton />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;