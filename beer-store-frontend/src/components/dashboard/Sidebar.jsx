import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex justify-center space-x-4 mb-4">
      <div className="flex flex-col items-center">
        <Link to="/admin">Inicio</Link>
      </div>
      <div className="flex flex-col items-center">
        <Link to="/admin/beers">Cervezas</Link>
      </div>
      <div className="flex flex-col items-center">
        <Link to="/admin/brands">Marcas</Link>
      </div>
      <div className="flex flex-col items-center">
        <Link to="/admin/orders">Ordenes</Link>
      </div>
      <div className="flex flex-col items-center">
        <Link to="/admin/users">Usuarios</Link>
      </div>
    </div>
  );
};

export default Sidebar;
