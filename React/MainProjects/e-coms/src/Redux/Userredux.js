import { createSlice } from "@reduxjs/toolkit";

const userr=createSlice({
    name:"UserrssEcom",
    initialState:{
        userrData:[]
    },

    reducers:{
        userValuess:(state,action) => {
            // console.log();
            state.userrData.push(action.payload)
        },
          removeUserData:(state)=>{
            state.userrData=[]
          }
    }
})

export const { userValuess,removeUserData} = userr.actions
export default userr.reducer