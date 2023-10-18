import axiosURL from "../../tools/axiosInstance";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { faEdit, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Section from "../UI/Section";
import Icons from "../UI/Icons";

export default function Orders() {
  const localURL = "http://localhost:1337";

  const allItemsFetch = useSelector((state) => state.allBrands.brands);
  const dispatch = useDispatch();
  const [allItems, setAllItems] = useState([]);

  // USAR fetchData SOLO PARA OBTENER DATA SIN REDUX
  const fetchData = async () => {
    try {
      //const resp = await axiosURL.get("/api/brands?populate=*");
      const resp = await axios.get(localURL + "/api/orders?populate=*");
      const responseData = resp.data.data || [];
      console.log(responseData);
      setAllItems(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  //Carga la data desde la base de datos al montarse el componente
  useEffect(() => {
    fetchData();
    //setAllItems(allItemsFetch);
  }, []);

  console.log(allItems);

  return (
    <div>
      <Sidebar />
      {/* Listado de todas las marcas */}
      <div className="mb-3 text-center">
        <h3>
          <b>Lista de Ordenes</b>
        </h3>
        <Section>
          <ul>
            {allItems.map((item) => (
              <li
                className="flex justify-between my-2 border-b border-secondary"
                key={item.id}
              >
                <div className="flex">
                  <div className="ml-2">
                    <h3 className="text-xl font-bold">{item.address}</h3>
                    <div className="font-light">{item.city}</div>
                    <div className="font-light">{item.items}</div>
                    <div className="font-light">{item.amount}</div>
                    <div className="font-light">
                      {item.users_permissions_user.username}
                    </div>
                    <div className="font-light">
                      {item.users_permissions_user.email}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}
