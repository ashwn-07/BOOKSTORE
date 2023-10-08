import axios from '../api/axios';
import useAuth from './UseAuth';

const useRefreshToken = () => {
    const {  setAuth } = useAuth();

    const refresh = async () => {
    
     const response = await axios.get('/auth/refresh', {
            withCredentials: true
        });
        setAuth(prev=>{
           
          return  { ...prev, accessToken: response.data.accessToken, roles:response.data.roles, id:response.data.id }}
        );
        
       
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;