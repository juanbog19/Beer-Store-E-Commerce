import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../tools/axiosInstance";
import OrderList from "../UI/OrderList";
import qs from "qs";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const jwt = useSelector((state) => state.auth.jwt);
  const user = useSelector((state) => state.auth.user);

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
  }, [jwt, query]);

  console.log(user);

  return (
    <div>
      <h1 className="text-2xl text-gray-700 uppercase text-center mb-3">
        Order history
      </h1>
      <ul>
        {orders.map((order) => (
          <OrderList key={order.id} order={order} />
        ))}
      </ul>
      <h1 className="text-2xl text-gray-700 uppercase text-center mb-3">
        Nombre: {user.username}
      </h1>
      <h1 className="text-2xl text-gray-700 uppercase text-center mb-3">
        Email: {user.email}
      </h1>
      <h1 className="text-2xl text-gray-700 uppercase text-center mb-3">
        Contraseña: {user.password}
      </h1>
      <button className="text-2xl text-gray-700 uppercase text-center mb-3">
        Cambiar contraseña
      </button>
    </div>
  );
};

export default Orders;
