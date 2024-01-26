

const {response} = require('express')
const RegUsers = require('../Models/Userschema')
const Crypto = require('crypto-js')
const jwt = require('jsonwebtoken');




router.post('/registerData',async (req,res) => {

console.log("asdf",req.body);

    
    const newUsers = new RegUsers({
        Name: req.body.Name,
        Email:req.body.Email,
        Password: Crypto.AES.encrypt(req.body.Password, process.env.Crypto_js).toString()
   
    })
console.log("!!!!!!!!!!!!!!!!",req.body.Name);
console.log("********",req.body);
    try{
        const savedUser = newUsers.save()
        res.status(200).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})


router.post('/login',async(req,res) => {
    console.log('loginn',req.body);
     try{
        const DataBase=await RegUsers.findOne({ Email: req.body.Email});
        !DataBase && res.status(401).json({ response: 'please check your email' });
        console.log('Backend data!',DataBase);

        const hashedpassword = Crypto.AES.decrypt(DataBase.Password,process.env.Crypto_js); 
        console.log("hashedpassword is?", hashedpassword);

        originalpass = hashedpassword.toString(Crypto.enc.Utf8);   //.enc.utf8 use cheyyunnath buffercodene mattan aanu..
        console.log('original pass is?', originalpass);
        console.log('req.body.password',req.body.Passowrd);
        originalpass != req.body.Password && res.status(401).json({ response: 'password and email do not match' });

        const accesstoken = jwt.sign({
            id: DataBase._id
        }, process.env.jwt_sec,
            { expiresIn: '1d' })

        const { Password,...others } = DataBase._doc
       console.log('tokennnn',accesstoken);
        console.log('*************', others);
        // var Id=DataBase._id
        res.status(200).json({ ...others, accesstoken })

     }catch (err) {
        console.error(err);
        return res.status(400)
    }
})
module.exports = router

