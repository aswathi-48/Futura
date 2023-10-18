import { configureStore } from "@reduxjs/toolkit";
import UseReducer from './useredux'


export default configureStore({
    reducer:{
        users:UseReducer
    }
})