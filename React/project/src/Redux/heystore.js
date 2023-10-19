import { createSlice } from "@reduxjs/toolkit";

const myApi=createSlice({
    name:'myitems',
    initialState:{
        mycartInfo:[]
    },
    reducers:{
        mycartPage:(state,action)=>{
            state.mycartPage.push(action.payload)
            console.log(action.payload);
        },
    }
})
export const {mycartPage}=myApi.actions
export default myApi.reducer