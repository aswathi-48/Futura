import { configureStore } from "@reduxjs/toolkit";
import heystoreitem from "./heystore";


export default configureStore({
    reducer:{
        myitems:heystoreitem

    }
})