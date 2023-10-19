import axiosURL from "../../tools/axiosInstance";
import { useEffect, useState } from "react";
import Section from "../UI/Section";
import { Link } from "react-router-dom";
import Icons from "../UI/Icons";
import { faEdit, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

export default function Brands() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axiosURL.get("/api/brands?populate=*");
        const responseData = resp.data.data || [];
        setBrands(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (brandId) => {
    try {
      await axiosURL.delete(`/api/brands/${brandId}`);
      alert("¡Eliminado con éxito!");
      setBrands((prevBrands) =>
        prevBrands.filter((brand) => brand.id !== brandId)
      );
    } catch (error) {
      console.error("Error al eliminar la marca:", error);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="mb-3 text-center">
        <h3>
          <b>Lista de Marcas</b>
        </h3>
        <div className="flex flex-start ml-20 px-20">
          <Link
            className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary"
            to={`/admin/brands/create`}
          >
            <Icons icon={faPlus} /> Agregar marca
          </Link>
        </div>
        <Section>
          <ul>
            {brands.map((brand) => (
              <li
                className="flex justify-between my-2 border-b border-secondary"
                key={brand.id}
              >
                <div className="flex">
                  {brand.img !== null ? (
                    <img
                      src={brand.img}
                      alt={`logo of the beer ${brand.name}`}
                      className="rounded-full shadow-lg w-14 h-14"
                    />
                  ) : (
                    ""
                  )}
                  <div className="ml-2">
                    <h3 className="text-xl font-bold">{brand.name}</h3>
                    <div className="font-light">{brand.description}</div>
                  </div>
                </div>
                <div>
                  <Link
                    className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary"
                    to={`/admin/brands/edit/${brand.id}`}
                  >
                    <Icons icon={faEdit} /> Editar
                  </Link>
                  <button
                    className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary"
                    onClick={() => handleDelete(brand.id)}
                  >
                    <Icons icon={faTrashAlt} /> Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}
