import axios from "axios"
import { userValuess } from "../../Redux/Userredux";


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

export const LoginValue =async (dispatch,LogValue) => {
    console.log('dataaa',LogValue);
     try{
        const res=await axios.post('http://localhost:5000/value1/login',LogValue)
        console.log('final dataaa',res);
        dispatch(userValuess(res.data))
    }catch(err){
        console.log(err);
}
}