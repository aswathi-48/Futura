import { createSlice } from "@reduxjs/toolkit";

const user=createSlice({
    name:'userss',
    initialState:{
        userValue:[]
    },
    reducers:{
        userActive:(state,action)=>{
            console.log('***',action);
            state.userValue.push(action.payload)
        },
        removeData:(state)=>{
            state.userValue=[]
        }
    }
})
export const {userActive,removeData}=user.actions
export default user.reducer  