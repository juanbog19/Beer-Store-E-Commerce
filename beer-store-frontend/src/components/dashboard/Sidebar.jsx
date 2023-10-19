import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex justify-center space-x-4 mb-4">
      <div className="flex flex-col items-center">
        <Link className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary" to="/admin">Inicio</Link>
      </div>
      <div className="flex flex-col items-center">
        <Link className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary" to="/admin/beers">Cervezas</Link>
      </div>
      <div className="flex flex-col items-center">
        <Link className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary" to="/admin/brands">Marcas</Link>
      </div>
      <div className="flex flex-col items-center">
        <Link className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary" to="/admin/orders">Ordenes</Link>
      </div>
      <div className="flex flex-col items-center">
        <Link className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary" to="/admin/users">Usuarios</Link>
      </div>
    </div>
  );
};

export default Sidebar;
