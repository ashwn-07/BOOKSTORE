import React, { useState } from 'react'
import './LogIn.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
const Login = () => {
  const navigate = useNavigate()
    const [input, setInputs] = useState({});


    const inputHolder = (e) => {
      
      setInputs({ ...input, [e.target.name]: e.target.value });
      console.log(input);

  }


const Submithandler = (e)=>{
  e.preventDefault();
axios.post(`http://localhost:8000/api/login`, input)
        .then((response) => {



            console.log(response);
            console.log(response.data.message)
            if (response.data.message === "User Login suceesfull") {


                // const userId = response.data.data._id;
                // const userName = response.data.data.name;

                // const token = response.data.token;
                // sessionStorage.setItem("usertoken", token);

               
                    navigate(`/userdashboard`)
            
            }
            else{
              alert('')
            }
         
           
        })
        .catch(error=>console.log(error))
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
      <input type="password" class="form-control" name="password" placeholder="password" onChange={inputHolder}/>

    </div>
   
    <div class="col-md-6 col-sm-12 ">
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