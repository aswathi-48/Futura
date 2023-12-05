const router = require('express').Router()   //create a variable and import express

const { response } = require('express');
const users = require('../Models/Userschema')   //import users from Userschema
const Crypto = require('crypto-js')
const jwt=require('jsonwebtoken');
const { verifyToken, verifyTokenAndauthorization } = require('../VerifyToken');

//   req.body.Password=Crypto.AES.encrypt(req.body.Password, process.env.Crypto_js).toString() // **engane cheythal direct req.body kodukkam 

router.post('/postmethod', async (req, res) => {   //router.post -value can be take frontend to backend  /postmethod-just a name for api, its userdefind
    console.log('postman data ?', req.body);  // req.body-data can be taken to frontend  ,it contains the data send in the post request by clients
    // const newUser=new users(req.body)
    //    Password: Crypto.AES.encrypt(req.body.Password, process.env.Crypto_js).toString()

    const newUser = new users({
        FirstName: req.body.FirstName,
        SecondName: req.body.SecondName,
        Age: req.body.Age,
        Email: req.body.Email,
        Phone:req.body.Phone,
        Password: Crypto.AES.encrypt(req.body.Password, process.env.Crypto_js).toString(),
        Address: req.body.Address,
  

    })

    try {
        const savedUser = await newUser.save()  //savedUser must be used ..before save the new user documents to database
        res.status(200).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})



router.get('/getmethod', async (req, res) => {
    try {
        const datas = await users.find();
        console.log(datas);
        res.status(200).json(datas)
    } catch (err) {
        res.status(500).json(err)

    }
})

router.get('/singledata/:id', async (req, res) => {
    console.log(req.params.id);
    try {
        const value = await users.findById(req.params.id);
        console.log(value);
        res.status(200).json(value)
    }
    catch (err) {
        res.status(500).json(value)
    }
})

router.put('/updatedata/:id', async (req, res) => {
    try {
        const resData = await users.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(resData)
    } catch (err) {
        res.status(500).json(err)
    }
})

// login verification
    router.post('/login', async (req, res) => {
    console.log('backend login', req.body);
    try {
        const DatabaseData = await users.findOne({ Email: req.body.Email });
        !DatabaseData && res.status(401).json({ response: 'please check your email' });

        console.log('Backend data!', DatabaseData);

        const hashedpassword = Crypto.AES.decrypt(DatabaseData.Password, process.env.Crypto_js); //encript cheytha seacret key use cheythanu decript cheyyunnath..
        console.log("hashedpassword is?", hashedpassword);

        const originalpass = hashedpassword.toString(Crypto.enc.Utf8);   //.enc.utf8 use cheyyunnath buffercodene mattan aanu..
        console.log('original pass is?', originalpass);

        originalpass != req.body.Password && res.status(401).json({response:'password and email do not match'});
        // res.status(200).json('success');
        const accesstoken= jwt.sign({
            id:DatabaseData._id
        },process.env.jwt_sec,
        {expiresIn:'5d'})

        const {Password,...others}=DatabaseData._doc

        console.log('*************',others);
var Id=DatabaseData._id
        res.status(200).json({Id,accesstoken})

        
    } catch (err) {
        console.error(err);
        return res.status(400)
    }
    
});

router.get('/getdata/:id' ,verifyToken,verifyTokenAndauthorization,async(req,res)=>{
    
    try{
        const res1 = await users.findById(req.params.id)
        res.status(200).json(res1)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router
