import axios from "axios";
const Base_URL ="http://localhost:5000/data1";


var Token = JSON.parse(JSON.parse(localStorage.getItem('persist:userrs')).AdminUser).adminData[0] &&
JSON.parse(JSON.parse(localStorage.getItem('persist:userrs')).AdminUser).adminData[0].accesstoken

console.log('finallyy Token', Token);


export const publicRequest = axios.create({
    baseURL:Base_URL
});


export const userRequest = axios.create({
    baseURL:Base_URL,
    headers:{token : `Bearer ${Token}`}
})