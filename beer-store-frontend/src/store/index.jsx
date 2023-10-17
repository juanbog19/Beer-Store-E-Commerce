/**
Configuración del almacenamiento de la aplicación utilizando Redux Toolkit y Redux Persist.
 
La configuración del almacenamiento de la aplicación se realiza utilizando Redux Toolkit y Redux Persist. En primer lugar, se importan las funciones y librerías necesarias, como configureStore de Redux Toolkit, persistReducer de Redux Persist, combineReducers de Redux, storage de redux-persist/lib/storage y thunk de redux-thunk.

A continuación, se importan los reducers creados para cada slice de la aplicación: counterSlice, cartSlice y authSlice.

Luego, se configura Redux Persist mediante la creación de un objeto configReducer que especifica la clave "beer-market" y el almacenamiento a utilizar.

Después, se combinan los reducers en uno solo utilizando combineReducers.

A continuación, se aplica la persistencia al reducer combinado mediante la función persistReducer.

Finalmente, se configura el store de Redux utilizando configureStore, pasando el reducer persistido y el middleware thunk.

El store configurado se exporta como valor por defecto.
*/
// Se importan las funciones y librerías necesarias.
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
// Se importan los reducers creados para cada slice.
import counterSlice from "./counterSlice";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";
import brandsSlice from "./searchSlice";
import bannerSlice from "./bannerSlice";
import searchSlice from "./searchSlice";
import beersSlice from "./beersSlice";
import brandFilterSlice from "./brandFilterSlice";
import allBrandsSlice from "./brandsSliceR";

// Configuración de Redux Persist.
const configReducer = {
  key: "beer-market",
  storage,
};

// Se combinan los reducers en uno solo.
const reducers = combineReducers({
  counter: counterSlice,
  cart: cartSlice,
  auth: authSlice,
  allBrands: allBrandsSlice,
  brands: brandsSlice,
  banner: bannerSlice,
  brandsSearch: searchSlice,
  beers: beersSlice,
  brandsList: brandFilterSlice,
  filtro: brandFilterSlice,
});

// Se aplica la persistencia al reducer combinado.
const persitedReducer = persistReducer(configReducer, reducers);

// Configuración final del store de Redux.
const store = configureStore({
  reducer: persitedReducer,
  middleware: [thunk],
});

export default store;
