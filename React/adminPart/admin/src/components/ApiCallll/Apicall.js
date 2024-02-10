import axios from "axios";
import { AdminValues } from "../../Redux/userredux";
import { userRequest } from "../RequestMethod";



export const AdminRegister = async(id) => {
    console.log("datta",id);
    try{
        const res = await axios.post('http://localhost:5000/data1/adminRegData',id)
        console.log("final data",res);
    }catch(err){
        console.log(err);
    } 
}

export const AdminLogin = async (data,dispatch) =>{
    console.log("hehe",data);
    try {
        const res = await axios.post('http://localhost:5000/data1/adminlogin',data)
        console.log('Response Status:',res.data);
        dispatch(AdminValues(res.data));
    } catch (error) {
        console.log(error);
    }
}


//add itemsss

export const Itemss = async (items) => {
    console.log("dattttaaaa",items);
    try{
        const itemData = await axios.post("http://localhost:5000/data2/additems",items)
        console.log("**",itemData);
    }catch(err){
        console.log(err);
  }
}
// user details display

export const userss = async(id)=>{
    
    try {
        const res = await axios.get("http://localhost:5000/value1/UserDetailsPrint")
        console.log("yo ansr",res.data);
        return res
    } catch (error) {
        console.log(error);
    }
}

//profileget
export const getadminprofile = async(id) => {
    console.log("id....??",id);
    try{
        const response = await userRequest.get(`/data1/getadmindetails/${id}`)
        console.log("dataaaa getadmin update ",response.data);
        return response.data
       }catch(err){
        console.log(err);
       }
}

//user details update

export const updateProfiles = async (upval) =>{
    console.log('updateee',upval);
    try{
        const upres=await axios.put(`http://localhost:5000/data1/updateAdminProfile/${upval._id}`, {
            Name:upval.Name,
            Email:upval.Email,
            Images:upval.Images,
        })
        console.log("upresss",upres);
        return upres
    }catch(err){
        console.log(err);
    }
}

// update items

export const updateItemDetails = async(updatevalue) =>{
    console.log("updateevalueess",updatevalue);
    try{
        const updateRes = await axios.put(`http://localhost:5000/data2/updateItems/${updatevalue._id}`,{
            category:updatevalue.category,
            type:updatevalue.type,
            title:updatevalue.title,
            description:updatevalue.description,
            price:updatevalue.price,
            Images:updatevalue.Images
        })
        console.log("updateResss",updateRes);
        return updateRes
    }catch(err){
        console.log(err);
    }
}


//itemsget


export const getitemDetails =async(id) => {
    try{
        const resp = await axios.get(`http://localhost:5000/data2/getItemDetails/${id}`)
        console.log("data getitem",resp.data);
        return resp.data
    }catch(err){
        console.log(err);
    }
}

//items delete 

export const DeleteItems = async(id) =>{
    console.log('idd',id);
    try{
        const deleteItems = await axios.delete(`http://localhost:5000/data2/itemsDelete/${id}`)
        console.log('deleteee',deleteItems);
    }catch(err){
        console.log(err);

    }
}

//user details delete 

export const DeleteUserData = async (id) => {
    console.log('idddddd',id);
    try{
        const deletedata = await axios.delete(`http://localhost:5000/value1/userDetailsDelete/${id}`)
        console.log("delete",deletedata);
    }catch(err){
        console.log(err);
    }
}


//itemsget

export const itemview = async (id) => {
    console.log("product-data",id);
    try {
        const res = await axios.get('http://localhost:5000/data2/ViewItems',id)
        console.log('getproduct',res.data);
        return res
    } catch (error) {
        console.log(error);
    }
}

export const viewDetails = async (id) => {
    console.log('idddd00000',id);
    try {
        const ress = await userRequest.get(`/data2/getItemDetails/${id}`);
        console.log('detailsss', ress.data);
        return ress.data;


    } catch (err) {
        console.log(err);
    }
};
