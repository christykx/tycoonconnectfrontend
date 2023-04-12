import axios from "axios";


// const token = localStorage.getItem('user')
    const token = localStorage.getItem('user1')
    console.log(token, " from axios instence")


// const { currentUser } = useContext(AuthContext)

export const makeRequest = axios.create({
    baseURL: "https://tycoonconnect.online",
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    },
    withCredentials: true
});