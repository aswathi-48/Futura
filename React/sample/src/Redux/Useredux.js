import {createSlice} from '@reduxjs/toolkit'   //createSlice is a function provided by the Redux Toolkit, a popular library for managing state in React applications using Redux. 

const user=createSlice({
    name:'users',
    initialState:{
        userInfo:[]       //[] can be used to access array methods,,,,userInfo:null --> in this case can't access array methods   **dispathil varunna value store cheyyunnath depandency arrayyil aanu
    },
    reducers:{
userPage:(state)=>{

},
userPage:(state,action)=>{
       console.log('************************************',action);                   //fuction name is userdefind     state=initialstate
    state.userInfo.push(action.payload)  //                        kodukkunna datas payloadil aanu undavuka athine access cheyyan aanu .payload kodukkunnath
}
    }
})
export const {userPage}=user.actions   // kodukkunna value access cheyyan
export default user.reducer  //store.js yil access cheyyan


 

//main use:  state managment