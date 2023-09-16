/**
El componente "About" muestra información sobre la página de "Acerca de". Muestra un título y varios párrafos de texto. También hay un comentario dentro del código que está actualmente comentado. Este comentario contiene una línea de código que utiliza la función "Navigate" para redirigir al usuario a la página de inicio ("/"). Sin embargo, esta línea de código está actualmente comentada, por lo que no tiene efecto en el funcionamiento del componente.
*/
import { Navigate } from "react-router-dom";

const About = () => {

  return (
    <>
      <h1 className="text-center text-xl mb-4 mt-2">About</h1>
      <p>
        Non et proident magna voluptate. Ullamco eu id Lorem mollit. Veniam labore et
        ipsum dolore nisi irure amet est dolor ea proident aute laborum. Eiusmod est
        amet in tempor magna veniam occaecat. Ea ut cupidatat aliqua aute sint
        commodo sunt exercitation aliquip ut minim aliquip enim velit. Sunt
        reprehenderit mollit fugiat dolor voluptate dolor. Laboris anim cillum velit
        esse sunt nisi ea eiusmod eu exercitation proident elit culpa do.
      </p>
      <p>
        Non et proident magna voluptate. Ullamco eu id Lorem mollit. Veniam labore et
        ipsum dolore nisi irure amet est dolor ea proident aute laborum. Eiusmod est
        amet in tempor magna veniam occaecat. Ea ut cupidatat aliqua aute sint
        commodo sunt exercitation aliquip ut minim aliquip enim velit. Sunt
        reprehenderit mollit fugiat dolor voluptate dolor. Laboris anim cillum velit
        esse sunt nisi ea eiusmod eu exercitation proident elit culpa do.
      </p>
      <p>
        Non et proident magna voluptate. Ullamco eu id Lorem mollit. Veniam labore et
        ipsum dolore nisi irure amet est dolor ea proident aute laborum. Eiusmod est
        amet in tempor magna veniam occaecat. Ea ut cupidatat aliqua aute sint
        commodo sunt exercitation aliquip ut minim aliquip enim velit. Sunt
        reprehenderit mollit fugiat dolor voluptate dolor. Laboris anim cillum velit
        esse sunt nisi ea eiusmod eu exercitation proident elit culpa do.
      </p>
      <p>
        Non et proident magna voluptate. Ullamco eu id Lorem mollit. Veniam labore et
        ipsum dolore nisi irure amet est dolor ea proident aute laborum. Eiusmod est
        amet in tempor magna veniam occaecat. Ea ut cupidatat aliqua aute sint
        commodo sunt exercitation aliquip ut minim aliquip enim velit. Sunt
        reprehenderit mollit fugiat dolor voluptate dolor. Laboris anim cillum velit
        esse sunt nisi ea eiusmod eu exercitation proident elit culpa do.
      </p>
      <p>
        Non et proident magna voluptate. Ullamco eu id Lorem mollit. Veniam labore et
        ipsum dolore nisi irure amet est dolor ea proident aute laborum. Eiusmod est
        amet in tempor magna veniam occaecat. Ea ut cupidatat aliqua aute sint
        commodo sunt exercitation aliquip ut minim aliquip enim velit. Sunt
        reprehenderit mollit fugiat dolor voluptate dolor. Laboris anim cillum velit
        esse sunt nisi ea eiusmod eu exercitation proident elit culpa do.
      </p>
      {/*<Navigate to='/' replace={ true } /> */}
    </>
  );
}

export default About;