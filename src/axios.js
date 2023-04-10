import axios from "axios";


export const makeRequest = axios.create({
    baseURL:"https://tycoonconnect.online",
    withCredentials:true
})