const router=require('express').Router()
const multer = require('multer')


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        console.log('reqin multer storage',req.body);
        cb(null,'../admin/public/Images')
    },
    filename:(req,file,cb) => {
        cb(null,file.originalname)
    }
})
const upload=multer({storage:storage})

const additems = require('../Models/ItemSchema')

router.post('/additems',upload.single('Images'),(req,res) => {

    const newItem = new additems({
        category:req.body.category,
        type:req.body.type,
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        Images:req.file.originalname,

    })

    try{
        const saveitems=newItem.save()
        res.status(200).json(saveitems)
    }
    catch(err){
        console.log();
        res.status(500).json(err)
    }
})

module.exports= router