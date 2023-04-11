import axios from "axios";


const token = localStorage.getItem('user')
export const makeRequest = axios.create({
    baseURL: "https://tycoonconnect.online",
    headers: {
        'Authorization': `Bearer ${token?.accessToken}, ${token?.userid} `,
        'Content-Type': 'application/json'
    },
    withCredentials: true
});