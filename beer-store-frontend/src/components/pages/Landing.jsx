import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Landing() {
  const [edad, setEdad] = useState('');
  const [mostrarBanner, setMostrarBanner] = useState(false);

  const verificarEdad = () => {
    if (edad >= 18) {
      setMostrarBanner(true);
      setTimeout(()=>{
        setMostrarBanner(false);
      }, 60);
    } else {
      alert('Lamentablemente, debido a tu edad o ubicación, no podemos permitirte entrar en nuestro sitio en este momento');
    }
  };

  return (
    <div className="bg-cover bg-center h-screen"
    style={{
      backgroundImage: 'url(https://as1.ftcdn.net/v2/jpg/06/26/00/50/1000_F_626005031_5Jrwm0kSt3U9lyrZNuBXBD96OAAeEUfH.jpg)',
    }}
      >
      {!mostrarBanner && (
        <div className="age-verification text-center">
          <h2 className="text-3xl font-semibold text-yellow-500">Verificación de Edad</h2>
          <p className="flex items-center justify-center p-3 space-x-3 border-t-2 text-yellow-500">En The Beer Store Fomentamos el consumo responsable</p>
          <p className="mt-2 font-serif text-lg italic items-center font-light text-yellow-600">Por favor, confirma que eres mayor de edad para ingresar.</p>
          <input
            type="number"
            placeholder="Ingresa tu edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
          <NavLink to="/home">
          <button onClick={verificarEdad}
          className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full border border-gray-300 hover:border-gray-400"
          >Verificar</button>
          </NavLink>
        </div>
      )}
      {mostrarBanner && (
        <div className="banner">
          <h1>Bienvenido a Home</h1>
        </div>
      )}
    </div>
  );
}

export default Landing;