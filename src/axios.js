import axios from "axios";


export const makeRequest = axios.create({
             
    // baseURL:"http://localhost:3001",
    baseURL:"https://tycoonconnect.online/",
    // "https://tycoonconnectapi.onrender.com",
    withCredentials:true
})