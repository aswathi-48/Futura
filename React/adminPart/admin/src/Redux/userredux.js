import { createSlice } from "@reduxjs/toolkit";

const AdminUser=createSlice({
    name:"Adminss",
    initialState:{
        adminData:[]
    },

    reducers:{
        AdminValues:(state,action) => {
            // console.log();
            console.log('adminvalues',action);
            state.adminData.push(action.payload)
        },
        removeData:(state)=>{
            state.adminData=[]
        }

    }
})

export const { AdminValues,removeData} =AdminUser.actions
export default AdminUser.reducer