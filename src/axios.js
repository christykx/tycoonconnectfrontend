import axios from "axios";


// const token = localStorage.getItem('user')
// const token = localStorage.getItem('user1')

const { currentUser } = useContext(AuthContext)
console.log(currentUser," from axios instence")
export const makeRequest = axios.create({
    baseURL: "https://tycoonconnect.online",
    headers: {
        'Authorization': `Bearer ${currentUser?.accessToken}`,
        'Content-Type': 'application/json'
    },
    withCredentials: true
});