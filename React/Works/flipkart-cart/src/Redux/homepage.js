import {createSlice} from '@reduxjs/toolkit'

const Cart=createSlice({
    name:'items',
    initialState:{
        cartInfo:[],
    },
    reducers: {
        cartpage:(state,action)=>{
            state.cartInfo.push(action.payload)
            console.log(action.payload);
        }
    }
})
export const {cartpage}=Cart.actions
export default Cart.reducer