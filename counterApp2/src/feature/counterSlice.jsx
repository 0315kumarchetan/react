import { createSlice } from "@reduxjs/toolkit";


export const counterSlice=createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{//this is reducer
        inc:((state)=>{state.value++}),//these are the actions
        dec:((state)=>{state.value--})
    }

})

export const {inc,dec} = counterSlice.actions;

export default counterSlice.reducer;    