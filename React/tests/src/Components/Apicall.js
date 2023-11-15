import axios from "axios"


export const signupdata=async(datas)=>{
    try{
        const res=await axios.post('http://localhost:3000/postmethod',datas)
        console.log('final data',res);
    }catch(err){
        console.log('error');
    }
}