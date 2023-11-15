const router=require('express').Router()   //create a variable and import express

const users=require('../Models/Userschema')   //import users from Userschema

router.post('/postmethod',async(req,res)=>{   //router.post -value can be take frontend to backend  /postmethod-just a name for api, its userdefind
    console.log('postman data ?',req.body);  // req.body-data can be taken to frontend  ,it contains the data send in the post request by clients
    const newUser=new users(req.body)
    // const newUser=new users({
    //     username:req.body.FirstName,
    //     name:req.body.SecondName,
    //     age:req.body.Age,
    //     email:req.body.Email,
    //     password:req.body.Password,
    //     address:req.body.Address,

    // })

    try{
        const savedUser=await newUser.save()  //savedUser must be used ..before save the new user documents to database
        res.status(200).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get('/getmethod',async(req,res)=>{
    try{
        const datas=await users.find();
        console.log(datas);
        res.status(200).json(datas)
    }catch(err){
        res.status(500).json(err)

    }
})

router.get('/singledata/:id', async(req,res)=>{
    console.log(req.params.id);
    try{
        const value=await users.findById(req.params.id);
        console.log(value);
        res.status(200).json(value)
    }
    catch(err){
        res.status(500).json(value)
    }
})

router.put('/updatedata/:id', async (req,res)=>{
    try{
        const resData=await users.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{ new:true})
        res.status(200).json(resData)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports=router     
 