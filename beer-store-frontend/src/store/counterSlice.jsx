/**
Este código define un "slice" de Redux llamado "counter" que manejará el estado y las acciones relacionadas con un contador. El "slice" se crea utilizando la función "createSlice" de "@reduxjs/toolkit". 

El "slice" tiene un estado inicial que contiene un objeto con una propiedad llamada "initialValue" establecida en 5. 

También se definen dos acciones: "incrementByOne" y "increment". La acción "incrementByOne" simplemente incrementa el valor de "initialValue" en 1. La acción "increment" toma un parámetro "payload" y suma su valor actual al valor de "initialValue". 

Las acciones se exportan para que puedan ser utilizadas en otros lugares del código y el "slice" en sí se exporta como el valor predeterminado.
*/
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name:'counter',
  initialState:{ initialValue: 5 },
  reducers:{
    incrementByOne( state ){
      state.initialValue++
    },
    increment( state, action ){
      state.initialValue += action.payload
    }
  },
});

export const { increment, incrementByOne } = counterSlice.actions;

export default counterSlice.reducer;