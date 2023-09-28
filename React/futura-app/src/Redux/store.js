import { configureStore } from "@reduxjs/toolkit";   //configurestore used to create a Redux store instance with sensible default settings and other pre-configured options.
import userreducer from './Useredux'   // userreducer is userdefind  ,first ndakkiya js filente path kodukkanam
 
export default configureStore({
    reducer:{
        users:userreducer
    }
})