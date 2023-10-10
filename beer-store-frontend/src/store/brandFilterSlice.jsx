import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../tools/axiosInstance";


export const getBrands = createAsyncThunk(
  "brands/getBrands",
  async (brand) => {
    try {
      // const resp = await axios.get(`/api/brands?filters[name][$containsi]=${brand}`, {
      const resp = await axios.get('/api/brands?populate=*', {
        headers: {
          Accept: 'application/json',
        },
      });
      // console.log(resp.data.data);
      const brands = resp.data.data;
      const searchedBrand = brands.filter((b)=>b.name===brand);
      //console.log(searchedBrand);
      return searchedBrand;      
      // return resp.data
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
/////////////////////////////////////////////////////////////////////////////////////////////////////

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  brandsSearch: [],      // Almacena los datos de las marcas
  loading: false,  // Indica si se está cargando la información
  error: null,     // Almacena cualquier error que ocurra
  brandsList:[]
};

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    filterBrands(state, action){
      const newInput = action.payload;

      const brandFined= state.brandsList.find((brand)=> brand.name === newInput.name);
    
    if(newInput === 'default'){
     state.brandsList
    } else{brandFined}    
  },
},
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