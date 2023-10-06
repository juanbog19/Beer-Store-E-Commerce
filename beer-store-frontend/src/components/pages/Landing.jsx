import { useState } from 'react';

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
        src="https://www.peakpx.com/es/hd-wallpaper-desktop-gzjmy"
        alt="Imagen de fondo"
      />
      {!mostrarBanner && (
        <div className="age-verification">
          <h2>Verificación de Edad</h2>
          <p>En The Beer Store Fomentamos el consumo responsable</p>
          <p>Por favor, confirma que eres mayor de edad para ingresar.</p>
          <input
            type="number"
            placeholder="Ingresa tu edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
          <button onClick={verificarEdad}>Verificar</button>
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