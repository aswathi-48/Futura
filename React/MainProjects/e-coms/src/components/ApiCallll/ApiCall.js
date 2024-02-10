import axios from "axios"
import { userValuess } from "../../Redux/Userredux";
import { publicRequest, userRequest } from "../RequestMethods";


//register

export const registerValue=async (value)=> {
    console.log('dataaaa',value);
    try{
        const res = await axios.post('http://localhost:5000/value1/registerData',value)
        console.log('final dataaa',res.data);
    }catch(err){
        console.log(err);
    }
}




// Login Dataaaaa

export const LoginValue =async (LogValue,dispatch) => {
    console.log('dataaa',LogValue);
     try{
        const res=await axios.post('http://localhost:5000/value1/login',LogValue)
        console.log('final dataaa',res);
        dispatch(userValuess(res.data))
    }catch(err){
        console.log(err);
}
}


//profileget

export const getUserProfile = async(id) => {
    console.log("id..?",id);
    try{
        const res1 = await userRequest.get(`/getuserdetails/${id}`)
        console.log('dataa getuser',res1);
        return res1.data
    }catch(err){
        console.log(err);
    }
}


//updateProfile


export const updateprofileuser = async (updval) => {
    console.log("updaatee.....",updval);
    try{
        const updres=await axios.put(`http://localhost:5000/value1/updateUserProfile/${updval._id}`,{
            Name:updval.Name,
            Email:updval.Email,
            Images:updval.Images
        })
        console.log("updresss",updres);
      
        return updres
    }catch(err){
        console.log(err);
    }
}


//databse items view 

export const ItemView = async (id) => {
    console.log("productdata",id);
    try{
        const res = await axios.get('http://localhost:5000/data2/ViewItems/',id)
        console.log('getitemsss',res);
        return res
    }catch(err){
        console.log(err);
    }
}


//getcartdetails

export const GetCart = async ()=>{
    // console.log('********',id);
    try{
        const res=await axios.get(`http://localhost:5000/value1/getcartData/`)
        console.log('valueee',res.data);
        return res
    }catch(err){
        console.log(err);
    }
}

//post cart details
export const postCart = async(data)=>{
    console.log("cartdata",data);
    try{
const res = await axios.post("http://localhost:5000/value1/postcartData",data)
console.log(res.data);
return {cartData:res.data}
    }catch(err){
        console.log(err);
    }
}

//post order details


export const postOrder = async(vals) => {
    console.log('orderdata',vals);
    try{
        const resVaal = axios.post("http://localhost:5000/value1/postorder",vals)
        console.log('resvaal',resVaal.data);
        return{orderData:resVaal.data}
    }catch(err)
  {  
    console.log(err);
}
}

//delete cart 

export const deleteCartItems=async(id) =>{
    console.log('cartid',id);
    try{
        const deletecart = await axios.delete(`http://localhost:5000/value1/deleteCarts/${id}`)
        console.log('deleteeee',deletecart);
    }catch(err){
        console.log(err);
    }
}



//quantity inc and dec

export const UpdateQuantity = async(data) => {
    console.log("data and id",data);
    const quantity=data.quantityState
 console.log(quantity);
    try{
        const res = await publicRequest.put(`/updatequanity/${data.id}`,{quantity}
        
        );
        ;
        return res;
    }catch(err){
        console.log(err);
    }
};