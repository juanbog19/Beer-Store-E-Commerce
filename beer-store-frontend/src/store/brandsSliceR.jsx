import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

const urlBeers = "http://localhost:1337/";

export const getBrandsssssNoSirveee = createAsyncThunk(
  'api/brands',
  async() => {
    try {
      const responsee = await axios.get(urlBeers,{
        headers:{
          Accept: 'application/json',
        },
      });

      return responsee.data
      
    } catch (error) {
      throw new Error (error.response.data.message)      
    }
  }
);
