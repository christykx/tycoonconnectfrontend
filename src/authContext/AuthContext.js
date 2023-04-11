import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { resolvePath } from "react-router-dom";
import { makeRequest } from "../axios";
export const AuthContext = createContext();
const token= localStorage.getItem("user")
export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(token || null);
    
    // const [currentUser1, setCurrentUser1] = useState(localStorage.getItem("user1") || null);

    const [blockdata, setblockdata] = useState('');

    // const login = async(details)=>{
    //     const res = await makeRequest.post('/users/login',details,{withCredentials:true})
    //     console.log("%%%%%%%%%%%%%%",res.data);
    //     console.log(res.data.userid);
    //     setCurrentUser(res.data)

    // };

    const login = (details) => {

    

        return new Promise(async (resolve, reject) => {

            const res = await makeRequest.post('/users/login', details, {
                 withCredentials: true })
            console.log(res,'res-----------------------//')
                if(res?.data?.status ==false){
                    console.log('helo-------------------------------')
                       reject('blocked')
                       return
               }
               setCurrentUser(res.data)
               resolve(res.data)
               
            //    alert()
            localStorage.setItem("user1",res.data?.accessToken)
            localStorage.setItem("user",{...res.data?.accessToken,...res.data?.userid})

            //    setCurrentUser1(res.data.accessToken)
            // localStorage.setItem("user",res.data)
            
         

        })

    };


    useEffect(() => {
        if (currentUser != undefined) {
            localStorage.setItem("user",{...res.data?.accessToken,...res.data?.userid})
            localStorage.setItem("user1",res.data?.accessToken)
           
        }
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    )
}