//import axiosURL from "../../tools/axiosInstance";
import axios from "axios";
import { useEffect, useState } from "react";
import Section from "../UI/Section";
import { Link } from "react-router-dom";
import Icons from "../UI/Icons";
import { faEdit, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

export default function Brands() {
  const localURL = "http://localhost:1337";
  const [form, setForm] = useState({});
  const [brands, setBrands] = useState([]);

  //CRUD Controllers para el admin dashboard
  //GET api/brands
  const fetchData = async () => {
    try {
      //const resp = await axiosURL.get("/api/brands?populate=*");
      const resp = await axios.get(localURL + "/api/brands?populate=*");
      const responseData = resp.data.data || [];
      console.log(responseData);
      setBrands(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  //POST api/brands

  //PUT api/brands/:id

  //DELETE api/brands/:id

  useEffect(() => {
    fetchData();
  }, []);

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
            to={`/admin/brands`}
          >
            <Icons icon={faPlus} /> Agregar producto
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
                  <img
                    src={brand.img.url}
                    alt={`logo of the brand ${name}`}
                    className="rounded-full shadow-lg w-14 h-14"
                  />
                  <div className="ml-2">
                    <h3 className="text-xl font-bold">{brand.name}</h3>
                    <div className="font-light">{brand.description}</div>
                    <p className="text-lg font-semibold text-primary">
                      $ {brand.price}
                    </p>
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
