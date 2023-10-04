import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../tools/axiosInstance";


export const getBanner = createAsyncThunk(
  "banner/getBanner",
  async () => {
    try {
      const resp = await axios.get(`/api/banners?populate=*`, {
        headers: {
          Accept: 'application/json',
        },
      });
      //console.log(resp.data);
      return resp.data;      
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
/////////////////////////////////////////////////////////////////////////////////////////////////////

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  banner: [],
  loading: false, 
  error: null,  
};

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder
      .addCase(getBanner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBanner.fulfilled, (state, action) => {
        state.loading = false;
        state.banner= action.payload;
      })
      .addCase(getBanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; 
      })
  },
});
export default bannerSlice.reducer;