import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../tools/axiosInstance";


export const getBeers = createAsyncThunk(
  "beers/getBeers",
  async ({ inputPrice, inputType }) => {   // this will invoque either a filter by Price or by Type under the beer parameter
    try {
      const resp = await axios.get(`/api/beers?populate=*&price=${inputPrice}&type=${inputType}`, {
        headers: {
          Accept: 'application/json',
        },
      });
      const beers = resp.data.data;
      return beers;
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
  reducers: {
    setBeers(state, action) {
      state.beersSearch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBeers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBeers.fulfilled, (state, action) => {
        state.loading = false;
        state.beersSearch = action.payload;
      })
      .addCase(getBeers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setBeers } = beersSlice.actions;

export default beersSlice.reducer;
