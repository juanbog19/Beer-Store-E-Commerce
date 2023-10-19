import axiosURL from "../../tools/axiosInstance";
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
  const localURL = "http://localhost:1337";

  const allItemsFetch = useSelector((state) => state.allBrands.brands);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    description: "",
  });
  const [allItems, setAllItems] = useState([]);
  const [edit, setEdit] = useState(false);
  const [brands, setBrands] = useState([]);
  const [errors, setErrors] = useState({});

  //console.log(allItems);

  //CRUD Controllers para el admin dashboard
  //GET api/brands
  // USAR fetchData SOLO PARA OBTENER DATA SIN REDUX
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
  const createItem = async (payload) =>
    await axios.post(localURL + "/api/brands", payload);

  const updateItem = async (payload, id) =>
    await axios.put(localURL + "/api/brands" + id, payload);

  const handleUpdate = (id, name, description) => {
    setEdit(true);
    setForm({
      id,
      name,
      description,
    });
    // updateItem(payload, id);
    // alert("Item modificado con éxito!");
    // setForm({
    //   name: "",
    //   description: "",
    // });
  };
  //axios.put(localURL + "/api/brands/" + id, payload);

  const deleteItem = async (id) => {
    if (confirm("Esta item se borrará permanentemente. ¿Continuar?")) {
      await axios.delete(localURL + "/api/brands/" + id);
      alert("Item borrado con éxito");
    }
    dispatch(getAllBrands());
    setAllItems(allItemsFetch);
  };

  const handleSubmit = (event) => {
    //event.preventDefault();
    if (!form.name || !form.description) {
      return alert("Completar campos obligatorios");
    }
    if (errors.name || errors.description) {
      return alert("Revisar campos introducidos");
    }
    const payload = { data: form };
    createItem(payload);
    alert("Item creado con éxito!");
    setForm({
      name: "",
      description: "",
    });
  };

  const handleDelete = (event) => {};
  //PUT api/brands/:id

  //DELETE api/brands/:id

  //VALIDATIONS para el formulario
  const validation = (form) => {
    const errors = {};
    if (!form.name) {
      errors.name = "Escribe el nombre del item";
    } else if (/[^A-Za-z0-9 ]+/g.test(form.name)) {
      errors.name = "Solo se permiten letras o numeros";
    }
    if (!form.description) {
      errors.description = "Escribe la descripcion del item";
    } else if (/[^A-Za-z0-9 ]+/g.test(form.description)) {
      errors.descritpion = "Solo se permiten letras o numeros";
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

  //Carga la data desde la base de datos al montarse el componente
  useEffect(() => {
    //fetchData();
    dispatch(getAllBrands());
    setAllItems(allItemsFetch);
  }, []);

  // console.log(form);
  // console.log(errors);

  return (
    <div>
      <Sidebar />
      {/* Listado de todas las marcas */}
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
            {allItemsFetch.map((item) => (
              <li
                className="flex justify-between my-2 border-b border-secondary"
                key={item.id}
              >
                <div className="flex">
                  {item.img ? (
                    <img
                      src={item.img.url}
                      alt={`logo of the brand ${item.name}`}
                      className="rounded-full shadow-lg w-14 h-14"
                    />
                  ) : (
                    <small>Img not found</small>
                  )}
                  <div className="ml-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <div className="font-light">{item.description}</div>
                  </div>
                </div>
                <div>
                  <Link
                    className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary"
                    to={`/admin/brands/edit/${item.id}`}
                  >
                    <Icons icon={faEdit} /> Editar
                  </Link>
                  <button
                    className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary"
                    onClick={() => deleteItem(item.id)}
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
