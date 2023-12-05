import axios from "axios";
const Base_URL ="http://localhost:7000/";


var Token =JSON.parse(JSON.parse(localStorage.getItem('persist:roots')).users).userInfo[0] &&
JSON.parse(JSON.parse(localStorage.getItem('persist:roots')).users).userInfo[0].accesstoken

// var Token =JSON.parse(JSON.parse(localStorage.getItem('persist:roots')).users).userInfo[0].accessToken;
// var Token='hbdhsgdhsjgksghjsgsfvgsjghsh'
console.log('finally Token**',Token);

export const publicRequest = axios.create({  //create use cheyyunnath post,get etcc direct access cheyyan aanu
    baseURL:Base_URL
});

export const userRequest=axios.create({
    baseURL:Base_URL,
    headers:{ token: `Bearer ${Token}`}
})

