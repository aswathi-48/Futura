import { createSlice } from "@reduxjs/toolkit";

const user=createSlice({
    name:'users',
    initialState:{
        userInfo:[]
    },
    
   reducers:{
    userDetails:(state,action)=>{
        console.log("***",action);
        state.userInfo.push(action.payload)
    },
    removeData:(state)=>{
        state.userInfo=[]
    }
}
})

export const {userDetails,removeData}=user.actions
export default user.reducer


//Chatgpt code

// const initialState = {
//     FirstName: '',
//     SecondName: '',
//     Age: '',
//     Address: '',
//     Email: '',
//     Password: '',
//   };
  
//   const Userredux = (state = initialState, action) => {
//     switch (action.type) {
//       case 'SET_USER_DATA':
//         return {
//           ...state,
//           ...action.payload,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default Userredux;
  