import Sidebar from "./Sidebar";
import axiosURL from "../../tools/axiosInstance";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import UploadWidget from "../pages/UploadWidget";

export default function BrandsCreateForm() {
  const navigate = useNavigate();

  const [beers, setBeers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axiosURL.get("/api/beers?populate=*");
        const responseData = resp.data.data || [];
        setBeers(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [newBrands, setNewBrands] = useState({
    name: "",
    description: "",
    img: "",
    beers: {
      connect: [],
    },
  });

  const selectedBeers = newBrands.beers.connect;
  const selectedBeersNames = beers.filter((beer) => beer.id === selectedBeers);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewBrands((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSetImageUrl = (url) => {
    setNewBrands((prevState) => ({
      ...prevState,
      img: url,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const obj = {
      data: {
        name: newBrands.name,
        description: newBrands.description,
        img: newBrands.img,
        beers: {
          connect: newBrands.beers.connect,
        },
      },
    };
    console.log(obj);

    try {
      const response = await axiosURL.post("/api/brands", obj);

      //console.log('Respuesta del servidor:', response.data);

      setNewBrands({
        name: "",
        description: "",
        img: "",
        beers: {
          connect: [],
        },
      });

      navigate("/admin/brands");
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      console.log("Detalles del error:", error.response);
    }
  };

  const handleAddBeer = (event) => {
    const BeerId = event.target.value;
    if (!newBrands.beers.connect.includes(BeerId))
      setNewBrands({
        ...newBrands,
        beers: { connect: [...newBrands.beers.connect, BeerId] },
      });
  };

  function handleDelete(beerId) {
    setNewBrands({
      ...newBrands,
      beers: {
        connect: [newBrands.beers.connect.filter((beer) => beer !== beerId)],
      },
    });
  }

  console.log(selectedBeersNames);

  return (
    <div>
      <Sidebar />
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="img" className="mb-5 flex">
            <span>Imagen:</span>
            <input
              type="text"
              name="img"
              id="img"
              key="img"
              value={newBrands.img}
              onChange={handleChange}
              hidden
            />
            <UploadWidget setImageUrlCallback={handleSetImageUrl} />
            {newBrands.img && (
              <img src={newBrands.img} className="w-14 h-14" alt="Brand" />
            )}
          </label>
          <label htmlFor="name" className="mb-5">
            <span>Nombre:</span>
            <input
              type="text"
              placeholder="Ingresa el nombre de la marca"
              name="name"
              id="name"
              key="name"
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
          <label htmlFor="connect" className="mb-5">
            <span>Cervezas:</span>
            <select
              className="mb-5"
              onChange={(event) => handleAddBeer(event)}
              value=""
            >
              {beers.map((beer) => (
                <option key={beer.id} value={beer.id}>
                  {beer.name}
                </option>
              ))}
            </select>
          </label>
          {/* Muestra las cervezas seleccionadas debajo */}
          {newBrands.beers.connect.map((beer) =>
            newBrands.beers.connect.length >= 1 ? (
              <div
                key={beer}
                className="flex justify-between my-2 border-b border-secondary"
              >
                <p className="mb-5 justify-around">{beer}</p>
                <button
                  key={beer.id}
                  // className="flex px-4 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary justify-around"
                  className="bg-white p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100  focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => handleDelete(beer)}
                >
                  X
                </button>
              </div>
            ) : (
              <div></div>
            )
          )}
          <button
            type="submit"
            className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary"
          >
            Guardar
          </button>
          {/* <Link className="px-2 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary" to={"/admin/brands/"}>
            Regresar
          </Link> */}
        </form>
      </div>
    </div>
  );
}
