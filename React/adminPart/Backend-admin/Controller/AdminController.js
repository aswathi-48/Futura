const NodeMailer = require('nodemailer');
// const mailer = require('../Models/user')
const mailer = require('../Models/admin')
const dotenv = require('dotenv')
// const RegUsers = require('../Models/userEcomschema')
const adminUser = require('../Models/Userschema')
 

dotenv.config()

const transpoter = NodeMailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.EMAIL_PASSWORD
    }
});


console.log('check ****',Math.random());
function generateOTP(){
    return Math.floor(1000 + Math.random() * 9000).toString();
}



const signups =async(req,res)=> {
    console.log("**",req.body);
    const {Email} =req.body;

    console.log('123',Email);
    const otp = generateOTP();
    const otpExpiration =new Date(Date.now() + 5 * 60 * 1000);

    console.log("otpppp",
        otp,
        otpExpiration,
        Email
    );
    const data1 = await adminUser.findOne({Email})
    console.log('backend email',data1);
    const UserId = data1._id
    console.log(UserId,"****************");

    const user = new mailer({
        Email,
        otp,
        otpExpiration,
        UserId
    });
    console.log('useer',user);
    try{
       const res1= await user.save();
        const mailOptions ={
            from: process.env.EMAIL,
            to:Email,
            subject: "Your OTP Code",
            text: `Your OTP code is showen below: ${otp}`,
        };
        console.log("mail options",mailOptions);
        const info = await transpoter.sendMail(mailOptions);
        console.log(res1,"***********");
        console.log("Email sent:", info.response);
        return res.status(200).json({message:"OTP sent successfully",otp,UserId});

    }catch(err){
        console.error("Error saving user:",err);
        // res.status(500).json(err)
       return res.status(500).json({error:"Eror sending OTP email"});

    }
}




module.exports = {signups};