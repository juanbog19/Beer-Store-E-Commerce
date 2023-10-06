import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../tools/axiosInstance';

export const getTypes = createAsyncThunk(
  "beers/getTypes",
  async (type)=>{
    try {
      const responsee = await axios.get(`/api/types?filters[name][$containsi]=${type}`,{
        headers:{
          Accept: 'appication/json',
        },
      });
      return responsee.data;
    } catch (error) {
      console.log( error );   
    }
  }
);

const typeSlice = createSlice({
  name:'types',
  initialState:{ 
    list: []
   },
  reducers:{
    
    setTypesList( state, action ){
      state.list = action.payload;
    }
  },
});

export const { setTypesList } = typeSlice.actions;

export default typeSlice.reducer;
  

/////////////

// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   filter: 'all',
//   todos: []
// }

// const todosSlice = createSlice({
//   name: 'todos',
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       state.todos.push(action.payload)
//     },
//     toggleTodo: (state, action) => {
//       const todo = state.todos.find(todo => todo.id === action.payload)
//       if (todo) {
//         todo.completed = !todo.completed
//       }
//     },
//     setFilter: (state, action) => {
//       state.filter = action.payload
//     }
//   }
// })

// export const { addTodo, toggleTodo, setFilter } = todosSlice.actions

// export default todosSlice.reducer