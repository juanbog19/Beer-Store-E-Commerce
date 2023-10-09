import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Landing() {
  const [edad, setEdad] = useState('');
  const [mostrarBanner, setMostrarBanner] = useState(false);

  const verificarEdad = () => {
    if (edad >= 18) {
      setMostrarBanner(true);
    } else {
      alert('Debes ser mayor de edad para ingresar.');
    }
  };

  return (
    <div className="landing-page">
      <img
        src=""
        alt="Could not load IMAGE"
      />
      {!mostrarBanner && (
        <div className="age-verification">
          <h2 className="text-3xl font-semibold text-gray-800">Verificación de Edad</h2>
          <p className="mt-2 font-serif text-lg italic font-light text-gray-600">En The Beer Store Fomentamos el consumo responsable</p>
          <p className="mt-2 font-serif text-lg italic font-light text-gray-600">Por favor, confirma que eres mayor de edad para ingresar.</p>
          <input
            type="number"
            placeholder="Ingresa tu edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
          <NavLink to="/home">
          <button onClick={verificarEdad}>Verificar</button>
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