import axios from "axios"
import { userDetails } from "../Redux/Userredux";
import { publicRequest, userRequest } from "./RequestMethod";



export const signupdata=async(datas)=>{
    console.log('form dataaa' ,datas);
    try{
        // const res=await axios.post('http://localhost:7000/postmethod',datas)
        const res=await publicRequest.post('/postmethod',datas)
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


//login dataa
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



//getprofile
export const getProfile =async(id)=>{ 
    console.log("where is id",id);
    try{
        const res1 = await userRequest.get(`/getdata/${id}`)
        console.log("final result",res1);
        return res1
    }catch(err){
        console.log(err);
    }
}

//update data from the signup page

export const updateProfile= async(val)=>{
    // console.log('idddddddd in apicall',id);
    console.log('updateeee',val);
    try{
        const res2=await axios .put(`http://localhost:7000/updateValue/${val._id}`,{
            FirstName:val.FirstName,
            SecondName:val.SecondName,
            Age:val.Age,
            Address:val.Address,
            Email:val.Email,
        })
        console.log('res222',res2);
        return res2
    }catch(err){
        console.log(err);
    }
}



export const productss =async(pro) => {
    console.log("dattttaaaa",pro);
    try{
        const productData= await axios.post('http://192.168.43.71:3000/api4/addproduct',pro)
        console.log("****",productData);
    }catch(err){
        console.log(err);
    }
}

// http://192.168.1.100:5000/api/data