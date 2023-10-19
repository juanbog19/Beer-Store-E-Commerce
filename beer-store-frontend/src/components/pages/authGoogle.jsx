import { loginWithGoogle } from "../../store/authSlice";
import { useDispatch } from "react-redux";
// import GoogleLogin from "react-google-login";

const AuthGoogle = () => {
  const IDCLIENT =
    "896022762546-7tntipkk23qf10fnengpguamfgeefl44.apps.googleusercontent.com";
  const dispatch = useDispatch();

  const googleResponse = async (response) => {
    if (response.accessToken) {
      try {
        const resultAction = dispatch(loginWithGoogle(response.accessToken));
        if (loginWithGoogle.fulfilled.match(resultAction)) {
          console.log("Inicio de sesión con Google exitoso", resultAction.payload);
        } else {
          console.error("Error al iniciar sesión con Google", resultAction.error);
        }
      } catch (error) {
        console.error("Error al iniciar sesión con Google", error);
      }
    } else {
      console.error("Inicio de sesión con Google fallido");
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <GoogleLogin
        clientId={IDCLIENT}
        buttonText="Registrarse con Google"
        onSuccess={googleResponse}
        onFailure={googleResponse}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default AuthGoogle;