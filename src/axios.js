import axios from "axios";
// import { AuthContext } from "./authContext/AuthContext";
// import { useContext } from "react";


// const token = localStorage.getItem('user')
const token =  localStorage.getItem("user1")

// const { currentUser } = useContext(AuthContext)
console.log(token," from axios instence")

export const makeRequest = axios.create({
    baseURL: "https://tycoonconnect.online",
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    },
    withCredentials: true
});