import {createSlice} from '@reduxjs/toolkit'

const local=createSlice({
    name:'Details',
    initialState:{
            localInfo:[]
    },
    reducers:{
        signupdata:(state,action)=>{
            console.log('**',action);
            state.localInfo.push(action.payload)
        }
    }
})
export const {signupdata}=local.actions
export default local.reducer