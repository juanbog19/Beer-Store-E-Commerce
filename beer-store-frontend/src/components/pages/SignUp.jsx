/**
El componente SignUp es un formulario de registro de usuario. Utiliza el hook useRef para almacenar una referencia al campo de contraseña y el hook useState para almacenar el estado del error de registro. También utiliza los hooks useDispatch y useSelector de Redux para manejar el estado de autenticación y realizar la acción de registro de usuario.

El formulario utiliza el hook useForm de react-hook-form para manejar la validación y el envío del formulario. Los campos de entrada de texto utilizan el componente Input, que recibe las propiedades del registro y muestra los errores de validación si los hay.

Cuando se envía el formulario, se llama a la función onSubmit, que realiza la acción de registro de usuario mediante la acción userRegister de Redux. Si el registro es exitoso, se navega a la página de checkout. Si hay un error en el registro, se muestra el mensaje de error.

Si el estado de carga es verdadero, se muestra un componente Spinner para indicar que el registro está en proceso.

El componente SignUp se exporta como el componente predeterminado del archivo.
*/
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../../store/authSlice';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Input from '../UI/Input';
import HolyBeer from '../svg/HolyBeer';
import Spinner from '../svg/Spinner';
import Button from '../UI/Button';
//import { GoogleLogin } from 'react-google-login';


const SignUp = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loading = useSelector( ( state ) => state.auth.loading );
  const [ errorRegister, setErrorRegister ] = useState( null );

  const { register, handleSubmit, formState:{ errors }, watch } = useForm();

  const _password = useRef({});
  _password.current = watch('password', '');
  // console.log(_password);

  const minValidation = {
    required: "This field is requiered",
    minLength: {
      value: 5,
      message: "Minimum 5 characters",
    },
  };

  const onSubmit = (data) => {
    setErrorRegister( null );
    const infoRegister = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    dispatch( userRegister( infoRegister ) )
    .unwrap()
    .then(() => {
      navigate( '/home' );
    }).catch( error => {
      setErrorRegister( error.response.data.error.message );
    });
    // console.log(data);
  };

  if ( loading ) {
    return (
      <div className="w-24 mx-auto">
        <Spinner />
      </div>
    );
  }

  const googleResponse = (response) => {
    console.trace("googleResponse se llamó desde aquí:");
    console.log(response)
  }

  return (
    <>
      <h1 className="mb-3 text-2xl text-center text-gray-700 uppercase">Sign Up</h1>
      <div className="grid max-w-4xl grid-cols-6 gap-2 mx-auto bg-white">
        <div className="col-span-3 p-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("username", minValidation)}
              label="Username"
              placeholder="Bladmir"
              extraClass={errors.username ? "border-error" : ""}
              errors={errors.username ? errors.username.message : null}
            />
            <Input
              {...register("email", {
                required: "This field is requiered",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
              label="Email"
              placeholder="bladimir@test.co"
              extraClass={errors.email ? "border-error" : ""}
              errors={errors.email ? errors.email.message : null}
            />
            <Input
              {...register("password")}
              label="Password"
              type="password"
              placeholder="******"
              extraClass={errors.password ? "border-error" : ""}
              errors={errors.password ? errors.password.message : null}
            />
            <Input
              {...register("confirPassword", {
                required: "This field is required",
                validate: (value) =>
                  value === _password.current || "Password do not match",
              })}
              label="Confirm Password"
              type="password"
              placeholder="******"
              extraClass={errors.confirmPassword ? "border-error" : ""}
              errors={errors.confirmPassword ? errors.confirmPassword.message : null}
            />
            {errorRegister && (
              <div className="p-2 mb-2 bg-red-200">{errorRegister}</div>
            )}
            <Button type="submit" label="Send" full />
          </form>
          <div className="flex items-center justify-center mt-4">
            <GoogleLogin
              clientId="976149304153-pq3kqlvrqrc5mfpfsmlg9uvmd58q7poa.apps.googleusercontent.com"
              buttonText="Registrarse con Google"
              onSuccess={googleResponse}
              onFailure={googleResponse}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </div>
        <div className="grid content-center col-span-3 justify-items-center">
          <div className="w-56 h-56">
            <HolyBeer />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;