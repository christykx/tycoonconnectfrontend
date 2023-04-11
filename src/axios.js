import axios from "axios";


const token = localStorage.getItem('user')
export const makeRequest = axios.create({
    baseURL: "https://tycoonconnect.online",
    headers: {
        'Authorization': `Bearer ${token?.accessToken}`
    },
    withCredentials: true
});