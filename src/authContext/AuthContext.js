import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { resolvePath } from "react-router-dom";
import { makeRequest } from "../axios";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(localStorage.getItem("user") || null);
    
    const [currentUser1, setCurrentUser1] = useState(localStorage.getItem("user1") || null);

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
               setCurrentUser1(res.data?.accessToken)

               resolve(res.data)
               
            
            // localStorage.setItem("user1",res.data?.accessToken)

            // localStorage.setItem("user",res.data?.userid)

            //    setCurrentUser1(res.data?.accessToken)
            // localStorage.setItem("user",res.data)
            
        })

    };


    useEffect(() => {
        if (currentUser != undefined) {
            localStorage.setItem("user", JSON.stringify(currentUser))
            localStorage.setItem("user1", JSON.stringify(currentUser1))

            // localStorage.setItem("user1",res.data?.accessToken)
        }
    }, [currentUser,currentUser1]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    )
}