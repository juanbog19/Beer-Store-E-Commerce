import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Section from "../UI/Section";
import axiosURL from '../../tools/axiosInstance';
import Icons from "../UI/Icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const UsersInfo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axiosURL.get('/api/users');
        const responseData = resp.data || [];
        setUsers(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = async (id) => {
    try {
      const userToUpdate = users.find(user => user.id === id);
      const updatedStatus = userToUpdate.status === 1 ? 0 : 1;

      setUsers(prevUsers => (
        prevUsers.map(user => (
          user.id === id ? { ...user, status: updatedStatus } : user
        ))
      ));

      await axiosURL.put(`/api/users/${id}`, { status: updatedStatus });
    } catch (error) {
      console.error('Error al actualizar el estado del usuario:', error);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="mb-3 text-center">
        <h3><b>Lista de Usuarios</b></h3>
        <Section>
          <ul>
            {users.map((user) => (
              <li className="flex justify-between my-2 border-b border-secondary" key={user.id}>
                <div className="flex">
                  <div className="ml-2">
                    <h3 className="text-xl font-bold">{user.username}</h3>
                    <div className="font-light">{user.email}</div>
                    <p className="text-lg font-semibold text-primary">{user.status ? 'Activo' : 'Inactivo'}</p>
                  </div>
                </div>
                <div>
                  <button className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary" onClick={() => handleUpdate(user.id)}>
                    <Icons icon={faUser} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default UsersInfo;

