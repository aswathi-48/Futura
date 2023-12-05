import axios from "axios"
import { userDetails } from "../Redux/Userredux";
import { publicRequest, userRequest } from "./RequestMethod";


export const signupdata=async(datas)=>{
    try{
        const res=await axios.post('http://localhost:7000/postmethod',datas)
        // const res=await publicRequest.post('/postmethod',datas)
        console.log('final data',res);
    }catch(err){
        console.log('error');
    }
}

// export const getIdData=async(id)=>{
//     console.log('id ?',id);
//     try{
//         const res =await axios.get(`http://localhost:3000/getmethod/${id}`)
//         console.log('**8**',res);
//         return res.data
//     }catch (err){ 
//         console.log(err);
//     }
// }


// export const Updatedata=async(id)=>{
//     try{
//         const ress=await axios.put(`http://localhost:3000/updatedata/${id}`)
//         console.log("*****",ress);
    
//     }catch(err){
          
//     }
// }


export const GetIdData=async(id)=>{
    console.log('id?',id);
    try{
        const res=await axios.get(`http://localhost:7000/getidmethod/${id}`)
        console.log('8888888',res);
        return res.data
    }catch(err){
        console.log(err);
    }
}


export const DeleteIdData=async(id)=>{
    console.log('id ?',id);
    try{
        const res=await axios.delete(`http://localhost:7000/delete/${id}`)
        console.log(res.data);
    }catch(err){
        console.log(err);
    }
}

export const UpdateIdData=async(id,datas)=>{
    console.log('id?',id);
    try{
        const res=await axios.put(`http://localhost:7000/updatedata/${id}`,datas)
        console.log(res.data);
        return res.data
    }catch(err){
        console.log(err);
    }
}

export const LoginData=async(LoginValue,dispatch)=>{
    console.log(LoginValue);

    try{
        const res=await axios.post('http://localhost:7000/login',LoginValue)
        console.log('Response Status:',res.data);
        dispatch(userDetails(res.data))
    }catch(err){
        console.log(err);
    }
}

export const getProfile=async(id)=>{
    console.log("where is id",id);
    try{
        const res1= await userRequest.get(`/getdata/${id}`)
        console.log("final result",res1);
        return res1
    }catch(err){
        console.log(err);
    }
}


export const updateProfile =async()=>{
    try{
        const res= await
    }
}