import { useNavigate, useParams } from "react-router-dom";
import axiosURL from "../../tools/axiosInstance";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BrandsEditForm() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [brands, setBrands] = useState({
    name: "",
    description: "",
    img: "",
  });

  const [newBrands, setNewBrands] = useState({
    name: "",
    description: "",
    img: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axiosURL.get(`/api/brands/${id}`);
        const responseData = resp.data.data || {};
        setBrands(responseData);
        setNewBrands(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewBrands((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const obj = {
      data: {
        name: newBrands.name,
        description: newBrands.description,
      },
    };

    console.log(obj);
    try {
      const response = await axiosURL.put(`/api/brands/${id}`, obj);

      //console.log('Respuesta del servidor:', response.data);

      setNewBrands({
        name: "",
        description: "",
        img: "",
      });

      navigate("/admin/brands");
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      console.log("Detalles del error:", error.response);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="name" className="mb-5">
            <span>Nombre:</span>
            <input
              type="text"
              placeholder="Ingresa el nombre de la marca"
              name="name"
              id="name"
              value={newBrands.name}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="description" className="mb-5">
            <span>Descripción:</span>
            <input
              type="text"
              placeholder="Ingresa la descripcion de la marca"
              name="description"
              id="description"
              key="description"
              value={newBrands.description}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="img" className="mb-5">
            <span>Imagen:</span>
            <input
              type="text"
              name="img"
              id="img"
              key="img"
              value={newBrands.img}
              onChange={handleChange}
            />
          </label>
          <button
            type="submit"
            className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary"
          >
            Guardar
          </button>
          <Link
            className="px-2 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary"
            to={"/admin/brands/"}
          >
            Regresar
          </Link>
        </form>
      </div>
    </div>
  );
}
