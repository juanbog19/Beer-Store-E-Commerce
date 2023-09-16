/* eslint-disable react/prop-types */
/*
El siguiente código es un componente de React que crea un modal. El modal consta de un fondo oscuro (Backdrop) y una tarjeta (CardModal) que se muestra en el centro de la pantalla. El modal se renderiza utilizando ReactDOM.createPortal, lo que permite que el contenido del modal se renderice fuera del árbol de componentes principal.

El componente Backdrop es simplemente un div con una clase CSS que establece su posición fija en la parte superior izquierda de la pantalla y le da un color de fondo negro con una opacidad del 70%.

El componente CardModal es otro div con una clase CSS que establece su posición fija en el centro de la pantalla, con un margen automático a los lados para centrarlo horizontalmente. También tiene un fondo blanco y una sombra para darle un aspecto de tarjeta.

El componente Modal es el componente principal que renderiza tanto el Backdrop como el CardModal utilizando ReactDOM.createPortal. El Backdrop se renderiza en un elemento con el id "backdrop" y el CardModal se renderiza en un elemento con el id "modal". Esto permite que el modal se muestre fuera del árbol de componentes principal y se superponga en la pantalla.

En resumen, este código crea un modal personalizable que se puede utilizar en una aplicación de React para mostrar contenido adicional o solicitar la confirmación del usuario.
*/
import ReactDOM from 'react-dom';

const Backdrop = () => {
    return <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-70"></div>
};

const CardModal = props => {
    return <div className="fixed mx-auto inset-x-0 top-12 bg-white pt-6 px-10 pb-2 drop-shadow-lg w-6/12">
    {props.children}
</div>
}

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.querySelector("#backdrop")
      )}
      {ReactDOM.createPortal(
        <CardModal>{props.children}</CardModal>,
        document.querySelector("#modal")
      )}
    </>
  );
}

export default Modal;