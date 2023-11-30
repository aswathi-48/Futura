import axios from "axios"
import { userActive } from "../Redux/Userredux";

export const SignupData=async(data)=>{
    try{
        console.log("check",data);
    const res=await axios.post('http://localhost:7000/postmethod',data)
    console.log('final data',res);
}catch(err){
    console.log('error');
}
}

export const LoginDatas = async (datas,dispatch)=>{
    console.log('*****',datas);
    try{
        const res=await axios.post('http://localhost:7000/login',datas)
        console.log('Response:',res);
        dispatch(userActive(res.data))

    }catch(err){
        console.log(err)
    }
}