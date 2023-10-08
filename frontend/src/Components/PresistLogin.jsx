import React, { useEffect, useState } from 'react'
import useRefreshToken from '../Hooks/UseRefreshToken'
import useAuth from '../Hooks/UseAuth';
import {Outlet} from "react-router-dom"
const PresistLogin = () => {

const refresh = useRefreshToken();
const {auth}= useAuth();
const [isLoading, setIsLoading] = useState(true)

useEffect(()=>{

const verifyRefreshToken = async ()=>{
    try { 
       await refresh();
    } catch (error) {
        console.error(error);
    }
    finally{
        setIsLoading(false)
    }
   

}


 !auth.accessToken?verifyRefreshToken():setIsLoading(false)

},[])




  return (
    <>
    {isLoading?<p>Loading....</p>:<Outlet/>}
    </>
  )
}

export default PresistLogin