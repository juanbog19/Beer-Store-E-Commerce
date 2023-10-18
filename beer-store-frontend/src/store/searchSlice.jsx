import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../tools/axiosInstance";

export const getBrands = createAsyncThunk(
  "brands/getBrands",
  async (brand) => {
    try {
      const resp = await axios.get(`/api/brands?filters[name][$containsi]=${brand}&populate=img`, { //filtra por nombre, *containsi* es el parametro que brinda strapi para buscar sin importar Mayusculas y para hacer busquedas inexactas, populate=img agrega la imagen al endpoint ya que sino trae la data sin la img     
        headers: {
          Accept: 'application/json',
        },
      });
      //console.log(resp.data.data);      
      return resp.data.data;            
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
/////////////////////////////////////////////////////////////////////////////////////////////////////

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  brandsSearch: [],      // Stores brand data
  loading: false,  // Shows if info is being loaded
  error: null,     // Stores error history
};

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder
      .addCase(getBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brandsSearch= action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; 
      })
  },
});
export default brandsSlice.reducer;