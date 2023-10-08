import React, { useState } from 'react'
import './LogIn.css'
import { useNavigate } from "react-router-dom"
import axios from '../../api/axios';
import useAuth from '../../Hooks/UseAuth';

const Login = () => {



  const navigate = useNavigate();
  const [input, setInputs] = useState({});
  const [clicked, setClicked] = useState(false)
  const [errMsg, setErrMsg] = useState(false)
  const {setAuth } = useAuth();

    const inputHolder = (e) => {
      
      setInputs({ ...input, [e.target.name]: e.target.value });
      

  }


const Submithandler = (e)=>{
  
  e.preventDefault();
axios.post(`/auth`, input, {
  withCredentials:true
})
        .then((response) => {
          
           if(response?.data?.accessToken)
           {
              const {accessToken, roles, id} = response.data
              
              setAuth({accessToken, roles, id})
                     
           if(roles.includes(6996))
           {
              navigate('/admindash')
           }

            else{
                 navigate('/userdashboard')
            }
           }


           
        })
        .catch((err)=>{
          setClicked(true)

          if (!err?.response) {
            setErrMsg("No Server Response");

            setTimeout(() => {
              setClicked(false);
            }, 2000);

         }
         
        else if (err.response?.status === 401 && err.response?.data.message==="User Does not exist" ) {
          setErrMsg("User Does not exist");
       
      
          setTimeout(() => {
            setClicked(false);
           
          }, 2000);

      } 
      else if (err.response?.status === 401 && err.response?.data.message==="Invalid username or password" ) {
        setErrMsg(err.response.data.message);
    } 
      
      else  if (err.response?.status === 400){
            setErrMsg("All feilds are required");

            setTimeout(() => {
              setClicked(false);
              
            }, 2000);

        }
        else  if (err.response?.status === 500){
          setErrMsg("Server  error");
          setTimeout(() => {
            setClicked(false);
          }, 2000);

          //set an error page for server error and dipslay it if needed
          console.log(err)
      }
        
        

        
        })
}
    




  return (
    <>
    <div className='d-flex flexwrap'>
    <div className='main-container vh-100'>

    </div>
    <div className='login-container ps-5'>
      <h1 className='login-heading'>Hello,</h1>
      <h1 className='login-heading'>Welcome back</h1>
         <form >
         <div class="form-row">
    <div class="col-md-6 col-sm-12 mb-4">
      <input type="text" class="form-control" name="email" placeholder="email" onChange={inputHolder}/>
    </div>
    <div class="col-md-6 col-sm-12 mb-4">
      <input type="text" class="form-control" name="password" placeholder="password" onChange={inputHolder}/>

    </div>
   
    <div class="col-md-6 col-sm-12 ">
    <p className={clicked?"successmsg":"hide-msg"} style={{color:"red"}}>{errMsg}</p>

      <button type="submit" className="btn btn-color btn-fnt w-100 fs-5" onClick={Submithandler}>Log In</button>
      
    </div>
    
  </div>
         </form>
    </div>
    </div>
    </>
  )
}

export default Login