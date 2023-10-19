/**
Este componente es un menú desplegable que muestra la información del usuario autenticado. Permite al usuario ver su nombre de usuario y correo electrónico, acceder al historial de pedidos y cerrar sesión. El menú se activa al hacer clic en el botón y se desactiva al hacer clic fuera del menú o en el botón nuevamente. El botón cambia de estilo cuando el menú está activo. Cuando se hace clic en "Cerrar sesión", se despacha la acción de cierre de sesión para el usuario autenticado.
 */
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authLogout } from "../../store/authSlice";
import { Link } from "react-router-dom";

const CardUser = () => {
  const isAdmin = useSelector((state) => state.auth.user.isAdmin);
  const isLoggedin = useSelector((state) => state.auth.loggedin);
  const divRef = useRef();
  const btnRef = useRef();
  const dispatch = useDispatch();
  const userinfo = useSelector((state) => state.auth.user);
  const [menuActive, setMenuActive] = useState(false);

  const activeClass = menuActive ? "absolute" : "hidden";
  const btnClass = menuActive
    ? "border-transparent text-white bg-primary"
    : "text-black border-black";

  useEffect(() => {
    const outsiderClick = (event) => {
      if (
        menuActive &&
        divRef.current &&
        !divRef.current.contains(event.target) &&
        !btnRef.current.contains(event.target)
      ) {
        setMenuActive(false);
      }
    };

    if (menuActive) {
      document.addEventListener("mousedown", outsiderClick);
    }

    return () => {
      document.removeEventListener("mousedown", outsiderClick);
    };
  }, [menuActive]);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const logout = () => {
    dispatch(authLogout());
  };
  return (
    <div>
      <button
        ref={btnRef}
        onClick={toggleMenu}
        className={`border ${btnClass} px-4 py-1 mr-2 hover:border-transparent hover:text-white hover:bg-primary`}
      >
        {userinfo && userinfo.username}
      </button>
      <div
        ref={divRef}
        className={`${activeClass} bg-white mt-2 px-5 py-2 shadow-lg`}
      >
        <h3> {userinfo && userinfo.username}</h3>
        <p className="text-sm text-gray-500 mb-2">
          {" "}
          {userinfo && userinfo.email}
        </p>
        <Link to="/orders" onClick={toggleMenu}>
          Mis ordenes
        </Link>
        <hr className="my-2" />

        <Link to="/my-profile" onClick={toggleMenu}>
          My Profile
        </Link>
        <hr className="my-2" />
        {isLoggedin && isAdmin && (
          <Link to="/admin" onClick={toggleMenu}>
            Dashboard
          </Link>
        )}
        {isLoggedin && isAdmin && <hr className="my-2" />}
        <button onClick={logout}>Cerrar sesión</button>
      </div>
    </div>
  );
};

export default CardUser;
