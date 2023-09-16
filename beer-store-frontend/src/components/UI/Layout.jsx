/**
Componente de diseño que envuelve el contenido de la página.
Recibe "props" como parámetro.
Devuelve una sección con clases de estilo y margen.
Renderiza el contenido que se pasa como hijo.
Exporta el componente "Layout" como predeterminado.
 */
const Layout = ( props ) => {
  return (
    <section className="w-5/6 mx-auto pr-8 pt-10">
      { props.children }
    </section>
  )
}

export default Layout;