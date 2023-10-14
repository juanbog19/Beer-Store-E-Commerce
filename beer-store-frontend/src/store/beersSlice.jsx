
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../tools/axiosInstance";


export const getBeers = createAsyncThunk(
  "beers/getBeers",
  async (inputPrice) => {
    try {
      const resp = await axios.get('/api/beers?populate=*', {
        headers: {
          Accept: 'application/json',
        },
      });
      const beers = resp.data.data;
      // const searchedType = beers.filter((beer)=>beer.type===inputType);
      const searchedPrice = beers.filter((beer)=>beer.price===inputPrice);
    //console.log(searchedType);
      return searchedPrice;      
       //return resp.data
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
/////////////////////////////////////////////////////////////////////////////////////////////////////

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  beersSearch: [],      // Almacena los datos de las beer
  loading: false,  // Indica si se está cargando la información
  error: null,     // Almacena cualquier error que ocurra
};

const beersSlice = createSlice({
  name: "beers",
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder
      .addCase(getBeers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBeers.fulfilled, (state, action) => {
        state.loading = false;
        state.beersSearch= action.payload;
      })
      .addCase(getBeers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; 
      })
  },
});

export const { setBeers, setByPrice, setByType} = beersSlice.actions;

export default beersSlice.reducer;






/////////////////////
// setBeers(state,action){                  //aqui se vincula la action con el componente Filter en carpeta UI
//   state.beersSearch = action.payload;
// },
// setByPrice(state, action){
// state.beersSearch = state.beersSearch.filter((beer)=> beer.price === action.payload.price)
// },
// setByType(state, action){
// state.beersSearch = state.beersSearch.filter((beer)=>beer.type === action.payload.type) //aun falta crear la propiedad type en la tabla de las Beers
// },