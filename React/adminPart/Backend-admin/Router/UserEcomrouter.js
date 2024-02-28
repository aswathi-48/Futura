const router = require('express').Router()
const RegUsers = require('../Models/userEcomschema')
const Crypto = require('crypto-js')
const jwt = require('jsonwebtoken');
const { verifyTokenn, verifyTokenAndAuthorization } = require('../VerifyToken');
const multer = require('multer')
const Cart = require("../Models/cartSchema")
const Order = require('../Models/orderSchema')
// const OrderUser =reqiure('../Models/orderUserSchema.js')
const OrderUser = require('../Models/orderUserSchema')
const UserOrders = require("../Models/conformOrder");


const { signup } = require('../Controller/appcontroller');


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



router.post('/mailSend',signup)


router.put('/changePass', async (req, res) => {
    console.log(req.body);
    try {
        const  Id  = req.body.userId;
        const Password = req.body.Password;
        console.log('Id',Id);
        console.log('password',Password);

        // Find the user by Id
        const user = await RegUsers.findOne({ _id: Id });
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



router.get('/getuserdetails/:id', async (req, res) => {
    console.log('req in getuser', req.body);

    try {
        const getuserres = await RegUsers.findById(req.params.id)
        console.log("resdataaa", getuserres);
        res.status(200).json(getuserres)
    } catch (err) {
        res.status(500).json(err)
    }
})



router.put('/updateUserProfile/:id', upload.single('Images'), async (req, res) => {
    console.log('Request Body:', req.body);
    console.log('^^^', req.params.id);
    try {
        const Updatee = await RegUsers.findByIdAndUpdate(req.params.id,
            {
                $set: {
                    Name:req.body.Name,
                    Email:req.body.Email,
                    Images: req.file.originalname,

                }
            }, { new: true });
        console.log('Updated User:', Updatee);
        res.status(200).json(Updatee);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json(err);
    }
});


// router.put('/updateUserProfile/:id', upload.single('Images'), async (req, res) => {
//     try {
//         const { Name, Email } = req.body;
//         const updateFields = { Name, Email };
//         if (req.file) {
//             updateFields.Images = req.file.filename;
//         }

//         const updatedUser = await RegUsers.findByIdAndUpdate(req.params.id, { $set: updateFields }, { new: true });
//         console.log('Updated User:', updatedUser);
//         res.status(200).json(updatedUser);
//     } catch (err) {
//         console.error('Error:', err);
//         res.status(500).json({ message: 'Server error' });
//     }
// });
//add cart data
router.post("/postcartData", async (req, res) => {

    try {
        // console.log("data", req.body);
        const dbDta = new Cart({


            itemName: req.body.itemName,
            itemPrice: req.body.itemPrice,
            itemQuantity: req.body.quantity,
            itemImage: req.body.itemImage,
            itemDes: req.body.itemDes,
            orderId:req.body.orderId
            

        })

        const saveData = await dbDta.save()
        res.status(200).json(saveData)

    } catch (err) {
        res.status(500).json(err)
    }
})



router.get('/getcartData/:id', async (req, res) => {
    // console.log('*****', req.body);
    try {
        getcartvalue = await Cart.find({orderId:req.params.id})
        // console.log(getcartvalue);
        res.status(200).json(getcartvalue)
    } catch (err) {
        console.log(err);
    }
})


router.delete('/deleteCarts/:id', async (req, res) => {
    // console.log('req.body',req.body);
    console.log("req.params.idddd", req.params.id);
    try {
        resDelete = await Cart.findByIdAndDelete(req.params.id)
        console.log("resdelete", resDelete);
    } catch (err) {
        res.status(500).json(err)
    }
})





router.put('/updatequanity/:id', async (req, res) => {
    console.log("req.body.quan", req.params.id);
    console.log("quantity", req.body);
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


//delete all cart item after proceed to checkout
router.delete('/allCartitemDelete', async (req,res)=>{
    console.log(
        "jidhsudhsduhsds",req.query.id)
    
    try{
        // const DeleteData = await Cart.find()
        // console.log(DeleteData);
        await Cart.deleteMany({orderId:req.query.id})
        res.status(200).json({ message: 'All cart items deleted successfully' });
    }catch(err){
        res.status(500).json(err)

    }
})



// ***************** buynow clicking

router.post('/postorder', async (req, res) => {
    console.log('buy now posting', req.body);
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




router.get('/getorder/:id', async (req, res) => {
    // console.log('dataaaa'.req.body);
    console.log('req.params.id in getorder', req.params.id);
    try {
        const getData = await Order.findOne({ title: req.params.id })
        console.log('data', getData);
        res.status(200).json(getData)
    } catch (err) {
        res.status(500).json(err)
    }
})




router.post('/postOrderUserDetails/', async (req, res) => {
    console.log("datat", req.body);
    try {
        const User = await OrderUser({
            HouseName: req.body.HouseName,
            HouseNo: req.body.HouseNo,
            Pincode: req.body.Pincode,
            Landmark: req.body.Landmark,
            city: req.body.city,
            phone: req.body.phone,
            ProfileId: req.body.loginId
        })
        const saveData = await User.save()
        res.status(200).json(saveData)
        console.log(saveData);
    } catch (err) {
        res.status(500).json(err)
    }
})


router.get('/getorderUser/:id', async (req, res) => {
    console.log("userid", req.params.id);
    try {
        const getuserorder = await OrderUser.find({ ProfileId: req.params.id })
        console.log("valueeeeee", getuserorder);
        res.status(200).json(getuserorder)

    } catch (err) {

    }
})


router.put('/updateorderuser/:id', async (req, res) => {
    console.log("**", req.params.id);
    console.log("*******", req.body);
    try {
        console.log("datta", req.body);
        console.log("iddd", req.params.id);
        const updatevaluess = await OrderUser.findByIdAndUpdate(req.params.id,
            {
                $set: {
                    HouseName: req.body.HouseName,
                    HouseNo: req.body.HouseNo,
                    Pincode: req.body.Pincode,
                    Landmark: req.body.Landmark,
                    city: req.body.city,
                    phone: req.body.phone

                }

            }, { new: true })
        res.status(200).json(updatevaluess)
        console.log("****", updatevaluess);
    } catch (err) {
        res.status(500).json(err)

    }
})

// {
//                     HouseName:req.body.HouseName,
//                     HouseNo:req.body.HouseNo,
//                     pincode:req.body.pincode,
//                     Landmark:req.body.Landmark,
//                     city:req.body.city,
//                     phone:req.body.phone
//                 }



router.delete('/deleteorderuser/:id', async (req, res) => {
    console.log("111111111", req.params.id);
    try {
        Deleteed = await OrderUser.findByIdAndDelete(req.params.id)
        console.log('dataaaa', Deleteed);
    } catch (err) {
        res.status(500).json(err)

    }
})





// router.post ('/conformDetails',async(req,res) => {
//     const new_order = await new OrderUser({
//         itemDetails:req.body.itemDetails,
//         orderUser:req.res.orderUser
//     })
//     try{
//         const saveitem = new_order.save()
//         res.status(200).json(saveitem)

//     }catch(err){
//         res.status(500).json(err)
//     }
// })

router.post("/adduserdata", async (req, res) => {
    console.log("haii", req.body);
    try {
        const data = req.body
        const dbDta = new UserOrders({
            Details: { ...data }
        })
        const saveData = await dbDta.save()
        console.log("eee data", saveData);
        res.status(200).json(saveData)
    } catch (Err) {

    }
})

router.get('/getuserdata', async (req, res) => {
    console.log("**",req.body);
    try {
        const resp = await UserOrders.find()
        console.log("*****************", resp);
        res.status(200).json(resp)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)

    }
})


router.searchText = async (req,res )=>{
    try{
        const searchText = req.params.searchText;
        console.log("search text ",searchText);
        const searchRegex = new RegExp(searchText,"i")

        const search = await itemDetailes.find({
            $or:[{title:searchRegex}]
        });
        if(!search.length === 0){
          return res.json({message:"no item found"})
        }
        res.json(search)
    }catch(err){
        res.status(500).json(err)

    }
}







module.exports = router

