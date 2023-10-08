import axios from "../api/axios"
import useAuth from "./UseAuth"

 const useLogOut =  ()=>{

const {setAuth } = useAuth();
   
const logOut = async ()=>{
        try {
   
            setAuth({});
            const response = await axios.post ("/auth/logout",{},{
          
              withCredentials:true
          });
            
          } catch (error) {
              console.error(error)
          }
    }

return logOut;
}

export default useLogOut