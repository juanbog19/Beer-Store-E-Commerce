import { createSlice } from "@reduxjs/toolkit";
import axios from '../tools/axiosInstance';

const beersSlice = createSlice({
  name:'beers',
  initialState:{ 
    list: []
   },
  reducers:{    
    addBeer( state, action ){
      state.list = action.payload;
    },
  
    filterBeer (state, action){
      action.payload === "all"
      ?state.list 
      :state.list.filter((beer)=> beer?.name?.includes(action.payload));
    }
  },
});

export const { addBeer, filterBeer } = beersSlice.actions;

export default beersSlice.reducer;

export const getBeers =()=> (dispatch)=>{
  axios
  .get('/api/beers?populate=*')
  .then((response)=>{
    dispatch(addBeer(response.data));
  }) 
  .catch((error)=> console.log( error ));   
    }







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