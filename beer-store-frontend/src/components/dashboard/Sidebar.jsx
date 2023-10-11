import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul>
        <li>
          <Link to="/admin">Inicio</Link>
        </li>
        <li>
          <Link to="/admin/beers">Cervezas</Link>
        </li>
        <li>
          <Link to="/admin/brands">Marcas</Link>
        </li>
        <li>
          <Link to="/admin/orders">Ordenes</Link>
        </li>
        <li>
          <Link to="/admin/users">Usuarios</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
