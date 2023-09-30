import { createSlice } from "@reduxjs/toolkit";
import { getBrands } from "./brandsSliceR";

const initialState ={
    brands: [],
    oneBrand: {}
};

const brandSlice = createSlice({ name:"brands", initialState, reducers:{
    getFindBrand: (state, action) =>{
        const id = action.payload
        state.oneBrand = state.brands.find( (brand)=> brand.id == id)
    }
},
extraReducers:(elemento)=>{
    elemento.addCase( getBrands.fulfilled, (state, action)=>{
        state.brands = action.payload;
    })
}
})

export const {getFindBrand} = brandSlice.actions;
export default brandSlice.reducer;