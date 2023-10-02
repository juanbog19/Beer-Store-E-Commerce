import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from '../tools/axiosInstance';

export const brandsFilter = createAsyncThunk(
    '/brands/brandsFilter',                     //nombre de la accion
    async() => {
      try {
        const response = await axios.get('/api/brands?filters[name][$eqi]=name',{
          headers:{
            Accept: 'application/json',
          },
        });
  
        return response.data;
        
      } catch (error) {
        throw new Error (error.response.data.message);      
      }
    }
  );

  const brandsSlice = createSlice({
    name: 'brands',
    initialState: {
      brands: [],
    },
    extraReducers: (builder) => {
      builder
        .addCase(brandsFilter.fulfilled, (state, action) => {
          state.brands = action.payload;
        });
    },
  });
  
  export default brandsSlice.reducer;
  