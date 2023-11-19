import axios from "axios"


export const signupdata=async(datas)=>{
    try{
        const res=await axios.post('http://localhost:7000/postmethod',datas)
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
        const res=await axios.get(`http://localhost:7000/api/data/getidmethod/${id}`)
        console.log('8888888',res);
        return res.data
    }catch(err){
        console.log(err);
    }
}


export const DeleteIdData=async(id)=>{
    console.log('id ?',id);
    try{
        const res=await axios.delete(`http://localhost:7000/api/data/delete/${id}`)
        console.log(res.data);
    }catch(err){
        console.log(err);
    }
}

export const UpdateIdData=async(id,datas)=>{
    console.log('id?',id);
    try{
        const res=await axios.put(`http://localhost:7000/api/data/updatedata/${id}`,datas)
        console.log(res.data);
        return res.data
    }catch(err){
        console.log(err);
    }
}