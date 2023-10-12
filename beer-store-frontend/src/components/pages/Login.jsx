/**
Componente de inicio de sesión que permite a los usuarios ingresar a su cuenta. Utiliza el estado local 
para manejar los errores de validación del formulario y el estado global de Redux para controlar el estado
de carga y realizar la autenticación. El componente renderiza un formulario con campos de nombre de usuario 
y contraseña, y muestra mensajes de error si los campos están vacíos o si las credenciales de inicio de 
sesión son incorrectas. Cuando el usuario envía el formulario, se llama a la acción de Redux "login" para 
autenticar al usuario. Si la autenticación es exitosa, se redirige al usuario a la página de pago. 
Si hay un error durante el proceso de autenticación, se muestra un mensaje de error en pantalla. 
Si el estado de carga es verdadero, se muestra un spinner de carga.
 */
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authSlice";
import Input from "../UI/Input";
import Spinner from "../svg/Spinner";
import Button from "../UI/Button";


const Login = () => {
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorUsername, setErrorUsername] = useState(false);
  const [errorMessageUsername, setMessageErrorUsername] = useState(null);

  const [errorPassword, setErrorPassword] = useState(false);
  const [errorMessagePassword, setMessageErrorPassword] = useState(null);

  const [errorLogin, setErrorLogin] = useState(false);

  const classUsername = errorUsername ? "border-error" : "";
  const classPassword = errorPassword ? "border-error" : "";

  const usernameInput = useRef();
  const passwordInput = useRef();

  const userLogin = (event) => {
    setErrorLogin(false);
    event.preventDefault();

    const username = usernameInput.current.value;
    const password = passwordInput.current.value;

    const usernameIsValid = username.trim() !== "";
    const passwordIsValid = password.trim() !== "";

    const formIsValid = usernameIsValid && passwordIsValid;

    if (!formIsValid) {
      if (!usernameIsValid) {
        setErrorUsername(true);
        setMessageErrorUsername("This field is required!");
      }
      if (!passwordIsValid) {
        setErrorPassword(true);
        setMessageErrorPassword("This field is required!");
      }
      return;
    }

    const data = { identifier: username, password };
    dispatch(login(data))
      .unwrap()
      .then((response) => {
        console.log("good", response);
        navigate("/home");
      })
      .catch((error) => {
        console.log("bad", error);
        setErrorLogin(true);
        usernameInput.current.value = "";
        passwordInput.current.value = "";
      });
    // console.log( 'Send data ', username, ' ', password );
  };

  if (loading) {
    return (
      <div className="w-24 mx-auto">
        <Spinner />
      </div>
    );
  }

  
 

  return (
    <>
      <h1 className="mb-3 text-2xl text-center text-gray-700 uppercase">Welcome back again!</h1>
      <div className="w-4/12 p-10 mx-auto bg-white">
        <form onSubmit={userLogin}>
          <Input
            id="username"
            label="User"
            placeholder="JonDoe"
            ref={usernameInput}
            extraClass={classUsername}
            onChange={() => {
              setErrorUsername(false);
              setMessageErrorUsername(null);
            }}
            errrors={errorMessageUsername}
          />
          <Input
            id="password"
            label="Password"
            placeholder="********"
            type="password"
            ref={passwordInput}
            extraClass={classPassword}
            onChange={() => {
              setErrorPassword(false);
              setMessageErrorPassword(null);
            }}
            errors={errorMessagePassword}
          />
          {errorLogin && (
            <div className="p-2 mb-2 bg-red-200">Wrong password or username</div>
          )}
          <Button type="submit" label="Submit" full />
        </form>
          <div className="flex items-center justify-center mt-4">
           
          </div>
      </div>
    </>
  );
};

export default Login;
