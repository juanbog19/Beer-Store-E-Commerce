import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Landing() {
  const [edad, setEdad] = useState('');
  const [mostrarBanner, setMostrarBanner] = useState(false);

  const verificarEdad = () => {
    if (edad >= 18) {
      setMostrarBanner(true);
    } else {
      alert('Lamentablemente, debido a tu edad o ubicación, no podemos permitirte entrar en nuestro sitio en este momento');
    }
  };

  return (
    <div className="landing-page">
      <img
        src="https%3A%2F%2Fwww.photowall.co.uk%2Fbeer-wallpaper&psig=AOvVaw3KUH7GTWn2IDJUYnaMdTQf&ust=1696920793087000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLiYjdqw6IEDFQAAAAAdAAAAABAE"
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