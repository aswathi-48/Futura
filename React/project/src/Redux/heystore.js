import { createSlice } from "@reduxjs/toolkit";

const myApi=createSlice({
    name:'myitems',
    initialState:{
        mycartInfo:[]
    },
    reducers:{
        mycartPage:(state,action)=>{
            const {id} =action.payload;
            const existingItem=state.mycartInfo.find(item=> item.id===id);
            
            if(existingItem){
                existingItem.quantity +=1;

            }else{
                state.mycartInfo.push({...action.payload,quantity:1});
            }
        },


        removeItem: (state, action) => {
            console.log(action.payload);
            const existingItem = state.mycartInfo.find(item => item.id === action.payload);
            console.log('first 0.1 ', action.payload);
            console.log('first check', existingItem);
            if (existingItem) {
                // If the item already exists, decrease the quantity by 1
                existingItem.quantity -= 1;

                // If the quantity becomes zero, remove the item
                if (existingItem.quantity === 0) {
                    // state.mycartInfo = state.mycartInfo.pop(item => item.id == id);
                    state.mycartInfo.splice(state.mycartInfo.findIndex((item) => item.id === action.payload), 1)
                }
            }
        },
    }
});


export const {mycartPage,removeItem}=myApi.actions
export default myApi.reducer