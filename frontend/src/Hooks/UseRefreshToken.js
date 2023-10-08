import { useEffect } from 'react';
import axios from '../api/axios';
import useAuth from './UseAuth';

const useRefreshToken = () => {
    const { auth,  setAuth } = useAuth();



    // console.log(JSON.stringify(prev));
    // console.log(response.data.accessToken);


    const refresh = async () => {
        console.log( "now auth ", auth)


        const response = await axios.get('/auth/refresh', {
            withCredentials: true
        });
        setAuth(prev=>{
           
          return  { ...prev, accessToken: response.data.accessToken, roles:response.data.roles, id:response.data.id }}
        );
        console.log("heloooo" , response.data.accessToken, response.data.roles, response.data.id)
       
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;