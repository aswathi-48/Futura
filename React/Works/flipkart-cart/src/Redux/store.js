import { configureStore } from "@reduxjs/toolkit";
import useRedux from './homepage'

export default configureStore({
    reducer:{
        items:useRedux
    }
})


