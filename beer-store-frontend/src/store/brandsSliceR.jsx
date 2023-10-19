import axiosURL from "../tools/axiosInstance";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlBeers = "http://beer-store-frontend-production.up.railway.app/";
//const localURL = "http://localhost:1337";

export const getBrandsssssNoSirveee = createAsyncThunk(
  "api/brands",
  async () => {
    try {
      const responsee = await axios.get(urlBeers, {
        headers: {
          Accept: "application/json",
        },
      });

      return responsee.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

/// SLICE PARA TRAER TODAS LAS BRANDS

export const allBrandsSlice = createSlice({
  name: "brands",
  initialState: {
    brands: [],
    isLoading: false,
    error: "",
  },
  reducers: {
    startLoadingBrands: (state) => {
      state.isLoading = true;
    },
    setAllBrands: (state, action) => {
      state.isLoading = false;
      state.brands = action.payload.brands;
    },
  },
});

export const getAllBrands = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingBrands());
    const resp = await axios.get(axiosURL + "/api/brands?populate=*");
    const respData = resp.data.data;
    //console.log(respData);
    dispatch(setAllBrands({ brands: respData }));
  };
};

export const { startLoadingBrands, setAllBrands } = allBrandsSlice.actions;
export default allBrandsSlice.reducer;
