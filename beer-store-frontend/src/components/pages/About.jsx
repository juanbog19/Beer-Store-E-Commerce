/**
El componente "About" muestra información sobre la página de "Acerca de". Muestra un título y varios párrafos de texto. También hay un comentario dentro del código que está actualmente comentado. Este comentario contiene una línea de código que utiliza la función "Navigate" para redirigir al usuario a la página de inicio ("/"). Sin embargo, esta línea de código está actualmente comentada, por lo que no tiene efecto en el funcionamiento del componente.
*/
import { Navigate } from "react-router-dom";

const About = () => {

  return (
    <>
      <h1 className="text-center text-xl mb-4 mt-2">¡Bienvenidos a nuestra página web de E-Beer-Store!</h1>
      <p>
      En E-Beer-Store, nos enorgullece presentar un emocionante e-commerce dedicado a la venta de cervezas artesanales de la 
      más alta calidad. Nuestra plataforma ha sido diseñada para satisfacer los gustos más exigentes de los amantes de la cerveza,
      brindando una experiencia única de compra y descubrimiento.Nuestros principales objetivos son:
      </p>
      <p>
      E-commerce de Cervezas Artesanales: Somos tu destino en línea para explorar y comprar una amplia variedad de cervezas artesanales. Desde las cervecerías 
      más reconocidas hasta las joyas ocultas de la producción local, ofrecemos una selección diversa y emocionante para satisfacer todos los paladares.
      </p>
      <p>
      Facilitamos la Venta de Cervezas Artesanales: En CervezaArte.mx, creemos en la diversidad y la inclusión. Damos la bienvenida a todas las marcas de 
      cerveza artesanal, grandes y pequeñas, para que promocionen y vendan sus productos en nuestra plataforma. Esto crea un espacio donde las cervecerías 
      emergentes pueden llegar a una audiencia más amplia y diversa.
      </p>
      <p>
      Incentivamos el Desarrollo de Pequeños y Medianos Emprendimientos: Creemos en el poder de la cerveza artesanal para impulsar la creatividad y la 
      innovación. Nuestra plataforma brinda a los emprendedores de cerveza artesanal la oportunidad de crecer y prosperar al conectarlos con una base de 
      clientes apasionados.
      </p>
      <p>
      Apoyo a través de Publicidad Relacionada: Para garantizar que nuestra plataforma siga siendo un destino vibrante y emocionante para los amantes de la 
      cerveza, colaboramos con marcas y productos relacionados que complementan la experiencia de nuestros usuarios. La publicidad en nuestra plataforma no 
      solo promociona productos de alta calidad, sino que también apoya el crecimiento continuo de la comunidad cervecera artesanal.
      </p>
      <p>
      En E-Beer-Store, estamos comprometidos con la excelencia, la diversidad y el crecimiento de la industria cervecera artesanal. Te invitamos a explorar 
      nuestra selección, descubrir nuevas cervezas y ser parte de nuestra comunidad cervecera en línea. ¡Gracias por unirte a nosotros en esta emocionante 
      aventura cervecera!
      </p>
      {/*<Navigate to='/' replace={ true } /> */}
    </>
  );
}

export default About;