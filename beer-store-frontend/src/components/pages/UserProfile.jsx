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
      .get(`/api/orders?populate=*`, {
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
    <div className="border-collapse font-abril">
    <h1 className="mb-3 text-2xl text-center uppercase">
      Perfil Del Usuario
    </h1>
    <div className="mb-3 text-2xl text-gray-700 uppercase align-middle border border-black">
      <h2 className="mx-3">
        Nombre: {user.username}
      </h2>
      <h2 className="mx-3">
        Email: {user.email}
      </h2>
    </div>
      <ul className="border">
      <h3 className="mb-3 text-2xl text-center text-gray-700 uppercase border border-black">
        Order history
      </h3>
        {orders.map((order) => (
          <OrderList key={order.id} order={order} />
        ))}
      </ul>
      <button className="mb-3 text-2xl text-center text-gray-700 uppercase">
        Cambiar contraseña
      </button>
    </div>
  );
};

export default Orders;
