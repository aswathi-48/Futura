import { createSlice } from "@reduxjs/toolkit";

const user=createSlice({
    name:'Items',
    initialState:{
        itemInfo:[]
    },
    reducers:{
    itemPage:(state,action)=>{
        console.log('****',action);
        state.itemInfo.push(action.payload)
    }
}
})
export const {itemPage}=user.actions
export default user.reducer