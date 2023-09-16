/**
Este componente de Orders muestra el historial de pedidos del usuario autenticado. Utiliza el estado y el efecto de React para realizar una solicitud a la API y obtener los pedidos del usuario. También utiliza el selector de Redux para obtener el token de autenticación y el usuario actual.

El componente realiza una solicitud GET a la ruta  `/api/orders`  con un parámetro de consulta  `query`  que incluye la información necesaria para filtrar los pedidos del usuario actual. La solicitud incluye el token de autenticación en el encabezado.

Una vez que se recibe la respuesta de la API, se actualiza el estado  `orders`  con los datos de los pedidos. Luego, se muestra una lista de los pedidos utilizando el componente  `OrderList` .

Es importante destacar que este código está escrito en JavaScript y utiliza la biblioteca de React.
*/
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from '../../tools/axiosInstance';
import OrderList from "../UI/OrderList";
import qs from 'qs';

const Orders = () => {

  const [ orders, setOrders ] = useState([]);
  const jwt = useSelector( ( state ) => state.auth.jwt );
  const user = useSelector( ( state ) => state.auth.user );

  const query = qs.stringify({
    populate: {
      users_permissions_user: {
        populate: "*",
      },
    },
    filters: {
      users_permissions_user: {
        id: { $eq: user.id },
      },
    },
  });

  useEffect(() => {
    axios
      .get(`/api/orders?${query}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((response) => {
        console.log(response);
        setOrders(response.data.data);
      });
  },[jwt, query])


  return (
    <div>
      <h1 className="text-2xl text-gray-700 uppercase text-center mb-3">
        Order history
      </h1>
      <ul>
        {orders.map(( order ) => (
          <OrderList key={ order.id } order={ order } />
        ))}
      </ul>
    </div>
  );
}

export default Orders;