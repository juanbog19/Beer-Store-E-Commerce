/**
El siguiente código es un componente de la aplicación principal de React. Aquí se importan varios componentes y se definen las rutas para cada página de la aplicación. También se utiliza el hook useSelector de react-redux para obtener el estado de autenticación y determinar si el usuario ha iniciado sesión o no.

El componente App renderiza un div con una clase de fondo y contiene el componente NavBar y el componente Layout. Dentro del componente Layout, se definen las rutas utilizando el componente Routes de react-router-dom.

Las rutas incluyen las siguientes páginas:

- Landing : Por recomendacion de PO Henry, se ha agregado una Landing con verificacion de edad // juan1ennon83
- Home: se muestra en la ruta raíz ("/") de la aplicación.
- About: se muestra en la ruta "/about".
- Login: se muestra en la ruta "/login" si el usuario no ha iniciado sesión.
- SignUp: se muestra en la ruta "/signup" si el usuario no ha iniciado sesión.
- Products: se muestra en la ruta "/products/:id", donde ":id" es el identificador del producto.
- Checkout: se muestra en la ruta "/checkout".
- Orders: se muestra en la ruta "/orders" si el usuario ha iniciado sesión.
- NotFound: se muestra en cualquier otra ruta y redirige al usuario a la ruta raíz ("/").

El componente App se exporta como el componente principal de la aplicación.
 */
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/UI/Layout";
import NavBar from "./components/UI/NavBar";

// Pages
import Landing from "./components/pages/Landing"; //Landing pendiente por renderizar @juan1ennon
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
// import NotFound from "./components/pages/404";
import Products from "./components/pages/Products";
import Checkout from "./components/pages/Checkout";
import Orders from "./components/pages/Orders";
import Detail from "./components/pages/Detail";
import AboutUs from "./components/pages/AboutUs";
import UserProfile from "./components/pages/UserProfile";
//Rutas para el admin dashboard
import Dashboard from "./components/dashboard/Dashboard";
import BeersForm from "./components/dashboard/BeersForm";
import BrandsForm from "./components/dashboard/BrandsForm";
import OrdersInfo from "./components/dashboard/OrdersInfo";
import UsersInfo from "./components/dashboard/UsersInfo";
import BeersCreateForm from "./components/dashboard/BeersCreateForm";
import BeersEditForm from "./components/dashboard/BeersEditForm";


function App() {
  const isLoggedin = useSelector((state) => state.auth.loggedin);

  return (
    <>
      <div className="min-h-screen bg-accent">
        <NavBar></NavBar>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            {!isLoggedin && <Route path="/login" element={<Login />} />}
            {!isLoggedin && <Route path="/signup" element={<SignUp />} />}
            <Route path="/products/:id" element={<Products />} />
            <Route path="/beers/:id" element={<Detail />} />
            <Route path="/checkout" element={<Checkout />} />
            {isLoggedin && <Route path="/orders" element={<Orders />} />}
            {isLoggedin && (
              <Route path="/my-profile" element={<UserProfile />} />
            )}
            {/* Rutas para admin dashboard */}
            <Route path="/admin" exact={true} element={<Dashboard />} />
            <Route path="/admin/beers" exact={true} element={<BeersForm />} />
            <Route path="/admin/beers/create" exact={true} element={<BeersCreateForm />} />
            <Route path="/admin/beers/edit/:id" exact={true} element={<BeersEditForm />} />
            <Route path="/admin/brands" exact={true} element={<BrandsForm />} />
            <Route path="/admin/orders" exact={true} element={<OrdersInfo />} />
            <Route path="/admin/users" exact={true} element={<UsersInfo />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/about/us" element={<AboutUs />} />
          </Routes>
        </Layout>
      </div>
    </>
  );
}

export default App;
