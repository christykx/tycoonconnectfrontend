import axios from "axios";
import { useEffect } from "react";
// import { AuthContext } from "./authContext/AuthContext";
// import { useContext } from "react";


// const token = localStorage.getItem('user')
useEffect(() => {
    const token = localStorage.getItem("user1")
    console.log(token, " from axios instence")

}, [])

// const { currentUser } = useContext(AuthContext)

export const makeRequest = axios.create({
    baseURL: "https://tycoonconnect.online",
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    },
    withCredentials: true
});