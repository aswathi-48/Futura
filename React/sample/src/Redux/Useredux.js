import {createSlice} from '@reduxjs/toolkit'

const user=createSlice({
    name:'users',
    initialState:{
        userInfo:[]
    },
    reducers:{
userPage:(state)=>{

},
userPage:(state,action)=>{
    state.userInfo.push(action.payload)
}
    }
})
export const {userPage}=user.actions
export default user.reducer