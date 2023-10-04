// import { createSlice } from "@reduxjs/toolkit";
// //import axios from "axios";
// import axiosURL from "../../tools/axiosInstance";

// const initialState = {beerType: []};

// const filterSlice = createSlice({
//   name:'typeBeer',
//   initialState,
//   reducers:{
//     beerByName( state, action ){
//         const brandsFind = action.payload;

//        const brandss =(axiosURL.get("/api/brands")).data

//       state.beerType++
//     },
//     increment( state, action ){
//       state.beerType += action.payload
//     }
//   },
// });

// export const { increment, incrementByOne } = filterSlice.actions;

// export default filterSlice.reducer;


/////////////////

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { createAction } from '@reduxjs/toolkit';
// import axios from '../tools/axiosInstance';


// export const getBrands = createAsyncThunk(
//   '/api/brands',
//   async () => {
//     //trycatch
//     const response = await axios.get('/api/brands');
//     return response.data;
//   }
// );

// export const filterBrands = createAction('brands/filter',(option) => ({
//     payload: option,
//   }));


///////////////////////
// import { createAction } from '@reduxjs/toolkit';

// export const filterByBrands = createAction(FILTER_BY_ATTACK);
// export const filterByLowAttack = createAction(FILTER_BY_LOW_ATTACK, (lowAttack) => ({
//   payload: lowAttack,
// }));
// export const orderByAlphabetic = createAction(FILTER_BY_ORDER_ALPHABETIC, (option) => ({
//   payload: option,
// }));
///////////////////////

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

const urlBeers = "https://clever-wealth-8d301ae501.strapiapp.com";

export const getBrands = createAsyncThunk(
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

