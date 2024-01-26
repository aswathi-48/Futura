const router = require('express').Router()
// const { response } = require('express')
const Crypto = require('crypto-js')
const adminUser = require('../Models/Userschema')
const jwt = require('jsonwebtoken');
const { verifyTokenn, verifyTokenAndAuthorization } = require('../VerifyToken')
const multer=require('multer')


const storage=multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'../admin/public/Images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload=multer({storage:storage});


router.post('/adminRegData',upload.single('Images') ,(req,res) =>{
    console.log('reqq register',req.body);
    // console.log('formdata *',req.originalname);
    console.log('formdata **',req.file);
    
    const newuser = new adminUser({
        Name:req.body.Name,
        Email:req.body.Email,
        Password: Crypto.AES.encrypt(req.body.Password, process.env.Crypto_js).toString(),
        Images:req.file.originalname,
       
    })
    console.log("***",newuser.Name);
    try{
        const savedUser = newuser.save()
        res.status(200).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    }
}) 

99

router.post ('/adminlogin',async (req,res) => {
console.log("backend-login",req.body);
try{
    const adminDB = await adminUser.findOne({ Email: req.body.Email})
    !adminDB && res.status(401).json({ response: 'please check your email' });

    console.log('Backend data!', adminDB);

    const hashedpassword = Crypto.AES.decrypt(adminDB.Password, process.env.Crypto_js); //encript cheytha seacret key use cheythanu decript cheyyunnath..
    console.log("hashedpassword is?", hashedpassword);

    const originalpass = hashedpassword.toString(Crypto.enc.Utf8);   //.enc.utf8 use cheyyunnath buffercodene mattan aanu..
    console.log('original pass is?', originalpass);

    originalpass != req.body.Password && res.status(401).json({ response: 'password and email do not match' });
    // res.status(200).json('success');
    const accesstoken = jwt.sign({
        id: adminDB._id
    }, process.env.jwt_sec,
        { expiresIn: '5d' })

    const { Password, ...others } = adminDB._doc

    console.log('*************', others);
    // var Id=adminDB._id
    res.status(200).json({ ...others, accesstoken })

}catch(err){
    console.log(err);
    return res.status(400)
}

})


router.get('/getMethod',async (req,res) => {
    console.log('req.body',req.body);
    try{
        const values = await adminUser.find();
        console.log(values);
        res.status(200).json(values)
    }catch (err){
        res.status(500).json(err)
    }
})


router.get ('/getadmindetails/:id',verifyTokenn,verifyTokenAndAuthorization,async(req,res) => {
    console.log('req in getadmin',req.body);
    try{
        const getres = await adminUser.findById(req.params.id)
        console.log("ressvalue",getres);
        res.status(200).json(getres)
    }catch(err){
        res.status(500).json(err)
    }
})


router.put('/updateAdminProfile/:id', async (req,res) => {
    try{
        const updateValue = await adminUser.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updateValue)
    }catch(err){
        res.status(500).json(err)
    }
})



module.exports = router 