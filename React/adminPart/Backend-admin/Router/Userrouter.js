const router = require('express').Router()
// const { response } = require('express')
const Crypto = require('crypto-js')
const adminUser = require('../Models/Userschema')
const jwt = require('jsonwebtoken');
const { verifyTokenn, verifyTokenAndAuthorization } = require('../VerifyToken')
const multer=require('multer');
// const { signup } = require('../Controller/appcontroller');
const { signups } = require('../Controller/AdminController');


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


router.post('/adminmailsend',signups)



router.put('/changePassword', async (req, res) => {
    console.log(req.body);
    try {
        const  Id  = req.body.userId;
        const Password = req.body.Password;
        console.log('Id',Id);
        console.log('password',Password);

        // Find the user by Id
        const user = await adminUser.findOne({ _id: Id });
        console.log('user',user);

        // If user not found, return an error
        if (!user) {
            return res.status(404).json({ response: "User not found" });
        }

        // Encrypt the new password
        const encryptedPassword = Crypto.AES.encrypt(Password, process.env.Crypto_js).toString();

        // Update the password
        user.Password = encryptedPassword;
        await user.save();

        // Return success response
        res.status(200).json({ response: "Password changed successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


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



router.get ('/getadmindetails/:id',async(req,res) => {
        console.log('req in getadmin',req.body);
        try{
            const getres = await adminUser.findById(req.params.id)
            console.log("ressvalue",getres);
            res.status(200).json(getres)
        }catch(err){
            res.status(500).json(err)
        }
    })


    // router.put('/updateAdminProfile/:id', async (req, res) => {
    //     console.log('^^^^',req.params.id);
    //     try{
    //         const updateValue = await adminUser.findByIdAndUpdate(req.params.id, 
    //             {
    //             $set: req.body
    //         }, { new: true });
    //         res.status(200).json(updateValue)
    // console.log('mmmm',updateValue);

    //     }catch(err){
    //         res.status(500).json(err)
    //     }
    // })


    router.put('/updateUserProfile/:id', upload.single('Images'), async (req, res) => {
        console.log(req.params.id);
        try {
            const updateValue = await adminUser.findByIdAndUpdate(req.params.id,
                {
                    $set: {
                        Name: req.body.Name,
                        Email: req.body.Email,
                        Images: req.file.filename // Save the file name to the database
                    }
                }, { new: true });
            res.status(200).json(updateValue);
        } catch (err) {
            res.status(500).json(err);
        }
    });

module.exports = router 