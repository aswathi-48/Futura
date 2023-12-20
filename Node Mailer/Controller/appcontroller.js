const NodeMailer = require('nodemailer');
const mailer =require('../Models/user')
const dotenv = require('dotenv')
dotenv.config()

// const transpoter = NodeMailer.createTransport({
//     service: "gmail",
//     auth: {
//         user:process.env.EMAIL,
//         pass:process.env.EMAIL_PASSWORD
//     }
// });


console.log('check ****',Math.random());
function generateOTP(){
    return Math.floor(1000 + Math.random() * 9000).toString();
}
const signup =async(req,res)=> {
    const {email} =req.body;

    console.log('123',email);
    const otp = generateOTP();
    const otpExpiration =new Date(Date.now() + 5 * 60 * 1000);

    console.log(
        otp,
        otpExpiration,
        email
    );
    const user =new mailer({
        email,
        otp,
        otpExpiration
    });
    try{
        await user.save();
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = {signup};