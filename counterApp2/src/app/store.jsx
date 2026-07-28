import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counterSlice"

//this is our empty redux store
export default configureStore({
    reducer:{
        counter : counterReducer
    }
})