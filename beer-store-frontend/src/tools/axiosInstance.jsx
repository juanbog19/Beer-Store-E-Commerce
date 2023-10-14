/**
Este código es una configuración de axios para crear una instancia con una base de URL 
local en el puerto 1337. Esto permite realizar solicitudes HTTP a un servidor local.
*/
import axios from "axios";

const instance = axios.create({
  baseURL: "positive-light-71aa924272.strapiapp.com",
});

export default instance;
