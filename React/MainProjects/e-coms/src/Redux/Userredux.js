import { createSlice } from "@reduxjs/toolkit";

const userr=createSlice({
    name:"Userrss",
    initialState:{
        userrData:[]
    },

    reducers:{
        userValuess:(state,action) => {
            // console.log();
            state.userrData.push(action.payload)
        },

    }
})

export const { userValuess} = userr.actions
export default userr.reducer