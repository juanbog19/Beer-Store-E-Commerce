/* eslint-disable react/prop-types */
/**
Componente de sección que envuelve el contenido proporcionado como hijos.
El componente se renderiza como una sección con un ancho del 75% del contenedor principal,
con margen automático en los ejes X e Y, y un relleno interno de 2 unidades.
El fondo del componente es blanco.
Los hijos del componente se renderizan dentro de la sección.
Exportamos el componente para poder utilizarlo en otros archivos.
 */
const Section = ( props ) => {
  return (
    <section className="w-3/4 mx-auto my-5 p-2 bg-white">
      { props.children }
    </section>
  )
}

export default Section