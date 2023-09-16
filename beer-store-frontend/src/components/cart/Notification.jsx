/*
El componente Notification es una función de flecha que recibe props como argumento. Dentro de la función, se desestructura la prop "notification" en las variables "type" y "message". Luego, se verifica si el tipo de notificación es "error" para asignar el valor booleano "true" a la variable "error" o "false" en caso contrario.

A continuación, se asigna la clase CSS correspondiente según el tipo de notificación en las variables "classError" y "classSuccess".

Dentro del return, se renderiza un div que contiene un SVG correspondiente al tipo de notificación. Si la notificación no es de error, se muestra un SVG verde, y si es de error, se muestra un SVG rojo. Ambos SVGs tienen un círculo de fondo y un polígono superpuesto.

Finalmente, se renderiza un div con el mensaje de la notificación, con una clase que varía según el tipo de notificación.

El componente Notification se exporta como default para poder ser utilizado en otros componentes.
*/

const Notification = props => {

  const { type, message } = props.notification;
  const error = type === "error" ? true : false;
  const classError = type === "error" ? "bg-red-200" : "bg-green-200";

  return (
    <div>
      {!error && (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          className="mx-auto mb-5"
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 70 70"
        >
          <circle cx="35" cy="35" r="35" fill="#39b54a" />
          <polygon
            points="60.26 21.97 36.13 47.62 30.72 53.36 29.46 54.7 9.74 36.16 16.41 29.07 29.05 40.95 53.17 15.3 60.26 21.97"
            fill="#fff"
          />
        </svg>
      )}
      {error && (
        <svg
          id="Layer_2"
          data-name="Layer 2"
          className="mx-auto mb-5"
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 70 70"
        >
          <circle cx="35" cy="35" r="35" fill="#c1272d" />
          <polygon
            points="41.67 35.01 53.94 48.03 46.85 54.7 35 42.09 23.14 54.7 16.06 48.03 28.32 35.01 16.06 21.96 23.14 15.3 35 27.91 46.85 15.3 53.94 21.96 41.67 35.01"
            fill="#fff"
          />
        </svg>
      )}
      <div className={`text-center ${classError} p-4`}>{message}</div>
    </div>
  );
}

export default Notification;