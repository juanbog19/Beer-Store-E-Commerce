//import axiosURL from "../../tools/axiosInstance";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { faEdit, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Section from "../UI/Section";
import Icons from "../UI/Icons";
import { getAllBrands } from "../../store/brandsSliceR";

export default function Brands() {
  //const localURL = "http://localhost:1337";

  const allBrandsFetch = useSelector((state) => state.allBrands.brands);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    description: "",
  });
  const [allBrands, setAllBrands] = useState([]);
  const [brands, setBrands] = useState([]);
  const [errors, setErrors] = useState({});

  console.log(allBrands);

  //CRUD Controllers para el admin dashboard
  //GET api/brands
  // fetchData se usa para obtener data sin redux
  // const fetchData = async () => {
  //   try {
  //     //const resp = await axiosURL.get("/api/brands?populate=*");
  //     const resp = await axios.get(localURL + "/api/brands?populate=*");
  //     const responseData = resp.data.data || [];
  //     console.log(responseData);
  //     setBrands(responseData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //POST api/brands

  //PUT api/brands/:id

  //DELETE api/brands/:id

  //VALIDATIONS para el formulario
  const validation = (form) => {
    const errors = {};
    if (!form.name) {
      errors.name = "Enter brand name";
    } else if (/[^A-Za-z0-9 ]+/g.test(form.name)) {
      errors.name = "Only letters or numbers allowed";
    }
    if (!form.description) {
      errors.description = "Enter description";
    } else if (/[^A-Za-z0-9 ]+/g.test(form.description)) {
      errors.descritpion = "Only letters or numbers allowed";
    }
    return errors;
  };

  //HANDLES PARA EL FORMULARIO
  //handleChange actualiza el estado con la info de los inputs del formulario
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    //validate({ ...form, [property]: value });
    setForm({
      ...form,
      [property]: value,
    });
    setErrors(
      validation({
        ...form,
        [property]: value,
      })
    );
  };
  //handleSubmit se dispara al hacer clic en el boton submit si el formulario no contiene errores
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name || !form.description) {
      return alert("Complete mandatory fields");
    }
    if (errors.name || errors.description) {
      return alert("Wrong input, please fill only with valid data");
    }
    dispatch(postActivity(form));
    alert("Brand created succesfully!");
    setForm({
      name: "",
      description: "",
    });
  };

  //Carga la data desde la base de datos al montarse el componente
  useEffect(() => {
    //fetchData();
    dispatch(getAllBrands());
    setAllBrands(allBrandsFetch);
  }, []);

  // console.log(form);
  // console.log(errors);

  return (
    <div>
      <Sidebar />
      {/* Formulario para crear marca */}
      <div className="mb-3 text-center">
        <h3>
          <b>Crear nueva marca</b>
        </h3>
        <form onSubmit={(event) => handleSubmit(event)}>
          <label className="">Name: </label>
          <input
            className=""
            name="name"
            type="text"
            placeholder="Nombre de la marca..."
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="">{errors.name}</span>}
          <label className="">Description: </label>
          <input
            className=""
            name="description"
            type="text"
            placeholder="Descripcion de la marca..."
            value={form.description}
            onChange={handleChange}
          />
          {errors.description && <span className="">{errors.description}</span>}
        </form>
        <div className="flex flex-start ml-20 px-20">
          <button className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary">
            <Icons icon={faPlus} /> Agregar producto
          </button>
        </div>
      </div>
      {/* Listado de todas las marcas */}
      <div className="mb-3 text-center">
        <h3>
          <b>Lista de Marcas</b>
        </h3>
        <Section>
          <ul>
            {allBrands.map((brand) => (
              <li
                className="flex justify-between my-2 border-b border-secondary"
                key={brand.id}
              >
                <div className="flex">
                  <img
                    src={brand.img.url}
                    alt={`logo of the brand ${brand.name}`}
                    className="rounded-full shadow-lg w-14 h-14"
                  />
                  <div className="ml-2">
                    <h3 className="text-xl font-bold">{brand.name}</h3>
                    <div className="font-light">{brand.description}</div>
                  </div>
                </div>
                <div>
                  <Link
                    className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary"
                    to={`/admin/brands`}
                  >
                    <Icons icon={faEdit} />
                  </Link>
                  <Link
                    className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary"
                    to={`/admin/brands`}
                  >
                    <Icons icon={faTrashAlt} />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}
