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
        const updres=await axios.put(`http://localhost:5000/value1/updateUserProfile/${updval._id}`,
        // {
        //     Name:updval.Name,
        //     Email:updval.Email,
        //     Images:updval.Images
        // }
        updval.formdata
        )
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

export const GetCart = async (id)=>{
    // console.log('********',id);
    try{
        const res=await axios.get(`http://localhost:5000/value1/getcartData/${id}`)
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


//deleteAllCart

export const deleteItems = async()=>{
    try{
        const deletee = await axios.delete(`http://localhost:5000/value1/allCartitemDelete`)
        console.log('deleteedara',deletee);
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



//post order details


export const postOrder = async(vals) => {
    console.log('orderdata',vals);
    try{
        const resVaal = await axios.post("http://localhost:5000/value1/postorder",vals)
        console.log('resvaal',resVaal.data);
        return{orderData:resVaal.data}
    }catch(err)
  {  
    console.log(err);
}
}


//get order details

export const getOrder =async(id)=>{
console.log("idddd",id);

try{
    const getData = await axios.get(`http://localhost:5000/value1/getorder/${id}`);
    console.log('detass',getData);
    return getData.data
}catch(err){
    console.log(err);
}
}


//post orderuser

export const postUserOrder = async(val) =>{
    console.log('orderuserdataaaa',val);
    try{
         const postdata = await axios.post("http://localhost:5000/value1/postOrderUserDetails",val)
         console.log("postdataa",postdata);
         console.log("new data",postdata.data);
         return{orderUserdata:postdata.data}
    }catch(err){

    }
}


//get orderuser

export const getuserorder =async(val) =>{
  console.log('id from get userorder',val);
  try{
    const res = await axios.get(`http://localhost:5000/value1/getorderUser/${val}`)
    console.log('aaaaaaaaa',res);
    return res
  }catch (err){
    console.log(err);
  }
}


//delete orderuser 


// export const deleteorderuserData = async (id) =>{
//     console.log("111",id);
//     try{
//          const deltedatas = await axios.delete(`http://localhost:5000/value1/deleteorderuser/${id}`)
//          console.log('delete data',deltedatas.data);
//          return deltedatas.data
//     }catch(err){
//         console.log(err);
//     }
// }


//update orderuser data

export const UpdateOrderUder = async (updatate) => {
    console.log("updatatatattts", updatate);
    try {
        const update = await axios.put(`http://localhost:5000/value1/updateorderuser/${updatate._id}`, {
            HouseName: updatate.HouseName,
            HouseNo: updatate.HouseNo,
            Pincode: updatate.Pincode,
            Landmark: updatate.Landmark,
            city: updatate.city,
            phone: updatate.phone
        });
        console.log("122333333333333", updatate.Landmark);
        console.log("12345678", update);
        return update.data;
    } catch (err) {
        console.log(err);
    } 
}


export const addUserDetails=async(data)=>{
    console.log("dtaa vanna?",data);
    const userData = data.datas[0]
    console.log(userData);
    const itemData = data.item
    console.log(itemData);
    const orderId = data.loginId
    try{
const res = await axios.post("http://localhost:5000/value1/adduserdata",{userData,itemData,orderId})
return res

    }catch(err){
        console.log(err);
    }
}