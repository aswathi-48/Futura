const router = require('express').Router()
const RegUsers = require('../Models/userEcomschema')
const Crypto = require('crypto-js')
const jwt = require('jsonwebtoken');
const { verifyTokenn, verifyTokenAndAuthorization } = require('../VerifyToken');
const multer = require('multer')
const Cart = require("../Models/cartSchema")
const Order = require('../Models/orderSchema')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../../MainProjects/e-coms/public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage });



router.post('/registerData', upload.single('Images'), (req, res) => {

    console.log("asdf", req.body);
    console.log('formdata **', req.file);


    const newUsers = new RegUsers({
        Name: req.body.Name,
        Email: req.body.Email,
        Password: Crypto.AES.encrypt(req.body.Password, process.env.Crypto_js).toString(),
        Images: req.file.originalname,


    })
    console.log("!!!!!!!!!!!!!!!!", req.body.Name);
    console.log("********", req.body);
    try {
        const savedUser = newUsers.save()
        res.status(200).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }

})


router.post('/login', async (req, res) => {
    console.log('loginn', req);
    console.log('***', req.body);
    try {

        console.log(req.body.Email, 'fucker  ');
        const DataBase = await RegUsers.findOne({ Email: req.body.Email });

        !DataBase && res.status(401).json({ response: 'please check your email' });
        console.log('Backend data!', DataBase);

        const hashedpassword = Crypto.AES.decrypt(DataBase.Password, process.env.Crypto_js);
        console.log("hashedpassword is?", hashedpassword);

        originalpass = hashedpassword.toString(Crypto.enc.Utf8);   //.enc.utf8 use cheyyunnath buffercodene mattan aanu..
        console.log('original pass is?', originalpass);
        console.log('req.body.password', req.body.Password);
        originalpass != req.body.Password && res.status(401).json({ response: 'password and email do not match' });

        const accesstoken = jwt.sign({
            id: DataBase._id
        }, process.env.jwt_sec,
            { expiresIn: '1d' })

        const { Password, ...others } = DataBase._doc
        console.log('tokennnn', accesstoken);
        console.log('*************', others);
        // var Id=DataBase._id
        res.status(200).json({ ...others, accesstoken })

    } catch (err) {
        console.error(err);
        return res.status(400)
    }

})


router.get('/UserDetailsPrint', async (req, res) => {
    console.log('jdd,zmcb', req);
    try {
        const datas = await RegUsers.find()
        console.log(datas);
        res.status(200).json(datas)
    } catch (err) {
        res.status(500).json(err)
    }
})


router.delete('/userDetailsDelete/:id', async (req, res) => {
    console.log('req.body', req.body);
    try {
        const res = await RegUsers.findByIdAndDelete(req.params.id)
        console.log('res', res.body);
    } catch (error) {
        res.status(500).json(err)
    }
})



router.get('/getuserdetails/:id', verifyTokenn, verifyTokenAndAuthorization, async (req, res) => {
    console.log('req in getuser', req.body);

    try {
        const getuserres = await RegUsers.findById(req.params.id)
        console.log("resdataaa", getuserres);
        res.status(200).json(getuserres)
    } catch (err) {
        res.status(500).json(err)
    }
})



router.put('/updateUserProfile/:id', async (req, res) => {
    console.log('Request Body:', req.body);
    console.log('^^^', req.params.id);
    try {
        const Updatee = await RegUsers.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            }, { new: true });
        console.log('Updated User:', Updatee);
        res.status(200).json(Updatee);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json(err);
    }
});



//add cart data
router.post("/postcartData", async (req, res) => {

    try {
        console.log("data", req.body);
        const dbDta = new Cart({


            itemName: req.body.itemName,
            itemPrice: req.body.itemPrice,
            itemQuantity: req.body.quantity,
            itemImage: req.body.itemImage,
            itemDes:req.body.itemDes

        })

        const saveData = await dbDta.save()
        res.status(200).json(saveData)

    } catch (err) {
        res.status(500).json(err)
    }
})



router.get('/getcartData', async (req, res) => {
    console.log('*****', req.body);
    try {
        getcartvalue = await Cart.find()
        console.log(getcartvalue);
        res.status(200).json(getcartvalue)
    } catch (err) {
        console.log(err);
    }
})


router.delete('/deleteCarts/:id', async (req,res) => {
    // console.log('req.body',req.body);
    console.log("req.params.idddd",req.params.id);
    try {
        resDelete = await Cart.findByIdAndDelete (req.params.id)
        console.log("resdelete", resDelete);
    } catch (err) {
        res.status(500).json(err)
    }
})



router.put('/updatequanity/:id', async (req, res) => {
    console.log("req.body.quan",req.params.id);
    console.log("quantity",req.body);
    try {
        const ResData = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: { itemQuantity: req.body.quantity },
            },
            { new: true }
        );
        return res.status(200).json(ResData)
    } catch (err) {
        res.status(500).json(err)
    }
})





router.post('/postorder/', async(req,res) => {
    try {
        const DataRes = await Order({
            title: req.body.title,
            price: req.body.price,
            Images: req.body.Images,
        })
        const saveData = await DataRes.save()
        res.status(200).json(saveData)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router

