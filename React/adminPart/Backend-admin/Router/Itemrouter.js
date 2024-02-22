const router = require('express').Router()
const multer = require('multer')
const itemDetails = require("../Models/ItemSchema")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('reqin multer storage', req.body);
        cb(null, '../admin/public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

const additems = require('../Models/ItemSchema')

router.post('/additems', upload.single('Images'), (req, res) => {

    const newItem = new additems({
        category: req.body.category,
        type: req.body.type,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        Images: req.file.originalname,

    })

    try {
        const saveitems = newItem.save()
        res.status(200).json(saveitems)
    }
    catch (err) {
        console.log();
        res.status(500).json(err)
    }
})

// Get Item 


router.get('/ViewItems', async (req, res) => {
    // console.log("reqqq", req.body);
    try {
        const itemss = await itemDetails.find()
        // console.log(itemss);
        res.status(200).json(itemss)
    } catch (err) {
        console.log(err);
    }
})


router.delete('/itemsDelete/:id', async (req, res) => {
    console.log('req.bodyy', req.body);
    try {
        res = await itemDetails.findByIdAndDelete(req.params.id)
        console.log('resss', res.data);
    } catch (err) {
        res.status(500).json(err)
    }
})




    router.get('/getItemDetails/:id',async (req,res)=>{
        // console.log('req in items',req);
        // console.log('req.params.id',req.params.id);
        try{
    const getItemres= await itemDetails.findById(req.params.id)
    // console.log("dtataaaa",getItemres);
    res.status(200).json(getItemres)
        }catch(err){
            res.status(500).json(err)
        }
    });



router.put('/updateItems/:id', upload.single('Images'), async (req,res) => {
    console.log("req.params.idd", req.params.id);
    try {
        const updateDatas = await itemDetails.findByIdAndUpdate(req.params.id,
            {
                $set: {
                    category:req.body.category,
                    type:req.body.type,
                    title:req.body.title,
                    description:req.body.description,
                    price:req.body.price,
                    Images: req.file.originalname,
                }
            }, { new: true });
        res.status(200).json(updateDatas)

    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router