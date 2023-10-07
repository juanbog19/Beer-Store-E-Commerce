// import { createSlice } from "@reduxjs/toolkit";
// import axios from '../tools/axiosInstance';

// const beersSlice = createSlice({
//   name:'beers',
//   initialState:{ 
//     list: []
//    },
//   reducers:{    
//     addBeer( state, action ){
//       state.list = action.payload;
//     },
  
//     filterBeer (state, action){
//       action.payload === "all"
//       ?state.list 
//       :state.list.filter((beer)=> beer?.name?.includes(action.payload));
//     }
//   },
// });

// export const { addBeer, filterBeer } = beersSlice.actions;

// export default beersSlice.reducer;

// export const getBeers =()=> (dispatch)=>{
//   axios
//   .get('/api/beers?populate=*')
//   .then((response)=>{
//     dispatch(addBeer(response.data));
//   }) 
//   .catch((error)=> console.log( error ));   
//     }

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
      return (searchedPrice);      
      // return resp.data
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
    filterPrice(state, action){}},

  },
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
export default beersSlice.reducer;

///////////////////////////////////



    // case filterBeer:
    //   const BeerCopy = state.BeerCopy;

    //   const gamesGenres =
    //     payload === "all"
    //       ? VideogamesCopy
    //       : VideogamesCopy.filter((game) => game?.genres?.includes(payload));
    //   return {
    //     ...state,
    //     Videogames: gamesGenres,
    //     numPage: 1,
    //   };

    // case SORT_VIDEOGAMES_ASC_DESC:
    //   let videogamesSort =
    //     payload === "asc"
    //       ? state.Videogames.sort((a, b) => {
    //           if (a.name > b.name) {
    //             return 1;
    //           }
    //           if (b.name > a.name) {
    //             return -1;
    //           }
    //           return 0;
    //         })
    //       : state.Videogames.sort((a, b) => {
    //           if (a.name > b.name) {
    //             return -1;
    //           }
    //           if (b.name > a.name) {
    //             return 1;
    //           }
    //           return 0;
    //         });
    //   return {
    //     ...state,
    //     Videogames: videogamesSort,
    //     numPage: 1,
    //   };









/////////////////////////////////////





// export const getBeers = createAsyncThunk(
//   "beers/getBeers",
//   async ()=>{
//     try {
//       const response = await axios.get('http://localhost:1337/api/beers?populate=*',{
   
//       headers:{
//           Accept: 'appication/json',
//         },
//       });
//       console.log('aquii mis beers', response);
//       return response.data;
//     } catch (error) {
//       console.log( error );   
//     }
//   }
// );