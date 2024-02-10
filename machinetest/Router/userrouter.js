const router = require('express').Router()
const Movie= require('../Models/userSchema')
router.post('/postMovieDetails', async (req,res) => {

    const newMovie = new Movie({
        MovieName:req.body.MovieName,
        DirName:req.body.DirName,
        Actor:req.body.Actor,
        Actress:req.body.Actress
    })
    try{
        const savedMovie =await newMovie.save()  
        res.status(200).json(savedMovie&&savedMovie)
    }catch(err){
        res.status(500).json(err)
    }
})


router.get('/GetMovieDetails', async(req,res) => {
   try{
    const datass = await Movie.find();
    console.log('dataaa',datass);
    res.status(200).json(datass)
   }catch(err){
    res.status(500).json(err)
   }
})


router.put('/UpdateMovieDetail/:id',async(req,res) => {
    console.log('req.parms.id',req.params.id);
    try {
        const update = await Movie.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
         { new: true });
         console.log("updateData",update);
        res.status(200).json(update)
    } catch (err) {
        res.status(500).json(err)
    }
})


router.delete('/deleteMovie/:id',async(req,res) => {
    try{
            const deleteData = await Movie.findByIdAndDelete(req.params.id)
          console.log('delete data',deleteData);
          res.status(200).json(deleteData);

    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router