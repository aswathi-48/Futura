import { configureStore } from "@reduxjs/toolkit";
import userreducer from './Useredux'

export default configureStore({
    reducer:{
        users:userreducer
    }
})