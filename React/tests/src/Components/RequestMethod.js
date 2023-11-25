import axios from "axios";
const Base_URL ="http://localhost:7000/";


export const publicRequest = axios.create({  //create use cheyyunnath post,get etcc direct access cheyyan aanu
    baseURL:Base_URL
});

