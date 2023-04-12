import axios from 'axios';

const makeRequest = axios.create({
  baseURL: 'https://tycoonconnect.online',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

makeRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem('user1');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default makeRequest;



// import axios from "axios";

// // const token = localStorage.getItem('user')
//     const token = localStorage.getItem('user1')
//     console.log(token, " from axios instence")


// // const { currentUser } = useContext(AuthContext)

// export const makeRequest = axios.create({
//     baseURL: "https://tycoonconnect.online",
//     headers: {
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json'
//     },
//     withCredentials: true
// });
