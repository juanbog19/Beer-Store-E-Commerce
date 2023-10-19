/**
El siguiente código es un slice de Redux que maneja la autenticación de un usuario. Aquí se definen dos acciones asíncronas: "login" y "userRegister". La acción "login" realiza una solicitud POST a la ruta '/api/auth/local/' con las credenciales del usuario para iniciar sesión. La acción "userRegister" realiza una solicitud POST a la ruta '/api/auth/local/register' con los datos del usuario para registrarse.

El slice también define un estado inicial que incluye las propiedades "loggedin" (booleano que indica si el usuario está autenticado), "user" (objeto que contiene los datos del usuario), "jwt" (token de autenticación) y "loading" (booleano que indica si la solicitud está en curso).

El slice tiene un caso adicional para la acción "logout" que actualiza el estado para indicar que el usuario ha cerrado sesión.

El slice utiliza el método "createAsyncThunk" para manejar las acciones asincrónicas. Cuando se realiza una solicitud pendiente, se actualiza el estado para indicar que la carga está en curso. Cuando la solicitud se completa correctamente, se actualiza el estado con los datos del usuario y el token de autenticación. Si la solicitud es rechazada, se actualiza el estado para indicar que la carga ha finalizado.

El slice exporta la acción "logout" y el reducer por defecto.
*/
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../tools/axiosInstance";
import emailjs from "emailjs-com";

emailjs.init("O16QNAbD4CtFz7Hmb");
const initialState = { loggedin: true, user: null, jwt: null, loading: false };

// Test
// const delay = ( time ) => {
//   return new Promise( resolve => setTimeout( resolve, time ));
// }

export const login = createAsyncThunk(
  "auth/login",
  async ({ identifier, password }, thunkApi) => {
    try {
      const response = await axios.post("api/auth/local/", {
        identifier,
        password,
      });
      return response;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const loginWithGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async (googleToken, thunkApi) => {
    try {
      const response = await axios.post("api/auth/google-login", {
        token: googleToken,
      });
      return response.data;
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const userRegister = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }, thunkApi) => {
    try {
      const response = await axios.post("api/auth/local/register", {
        username,
        email,
        password,
      });
      const templateParams = {
        to_email: email, // Dirección de correo electrónico del usuario registrado
      };

      await emailjs.send("service_7g4qye6", "template_kiwb6to", templateParams);
      return response;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.loggedin = false;
      state.user = { isAdmin: false };
      state.jwt = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userRegister.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.loading = false;
      state.loggedin = true;
      state.user = action.payload.data.user;
      state.jwt = action.payload.data.jwt;
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(loginWithGoogle.pending, (state) => {
      console.log("pending", action);
      state.loading = true;
    });
    builder.addCase(loginWithGoogle.fulfilled, (state, action) => {
      console.log("fulfilled", action);
      state.loading = false;
      state.loggedin = true;
      state.user = action.payload.user;
      state.jwt = action.payload.jwt;
    });
    builder.addCase(loginWithGoogle.rejected, (state) => {
      console.log("rejected", action);
      state.loading = false;
    });
    builder.addCase(login.pending, (state, action) => {
      console.log("pending", action);
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log("fulfilled", action);
      state.loggedin = true;
      state.user = action.payload.data.user;
      state.jwt = action.payload.data.jwt;
      state.loading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log("rejected", action);
      state.loading = false;
    });
  },
});

export const authLogout = authSlice.actions.logout;

export default authSlice.reducer;
