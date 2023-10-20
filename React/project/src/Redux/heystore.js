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
    }
})
export const {mycartPage}=myApi.actions
export default myApi.reducer