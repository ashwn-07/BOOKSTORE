import React, { useState } from "react";
import sideimg from "../../Img/book.jpg";
import "./Signup.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Signup = () => {
const [inputs, setInputs] = useState();
const navigate = useNavigate();


  const inputholder=(e)=>{
    console.log("onchange");
    setInputs({
        ...inputs,[e.target.name]:e.target.value
       })
    console.log(inputs)
}

const submitHandler=(e)=>{
  e.preventDefault()
  // Front End Form Validation ;
  console.log("clicked",inputs)
  // empty inputs


  axios.post( "http://localhost:8000/api/userSignup", inputs)
  .then((response)=>{
      console.log(response)
      if(response.data.message==="user saved successfully"){
          
          navigate('/login');
              
         
      }
      else{
        alert("not saved")
      }

       
      

     
  })
  .catch(error=>console.log(error))

} 


    return (
        <>
            <div className="row  m-0">
                <div className="col-md-6  col-sm-12 p-0 bg-primary">
                    <img className="img-fluid img-res" src={sideimg} />
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="ms-5 pt-5">
                        <h1 className=" logo-style">Readly</h1>
                        <p className="main-textdesc">
                            Already a Member?
                            <span>
                                <a className="log-in" href="/login">
                                   
                                    Log in
                                </a>
                            </span>
                        </p>
                    </div>
                    <div className="signup-form pt-5 ms-5">
                        <h1 className="form-heading">Get Started</h1>
  <form>
  <div class="form-row">
  <div class="col-md-6 col-sm-12 mb-4">
      <input type="text" class="form-control" name="name" placeholder="Name" onChange={inputholder}/>
    </div>
    <div class="col-md-6 col-sm-12 mb-4">
      <input type="text" class="form-control" name="email" placeholder="email" onChange={inputholder}/>
    </div>
    <div class="col-md-6 col-sm-12 mb-4">
      <input type="password" class="form-control" name="password" placeholder="password" onChange={inputholder}/>

    </div>
    <div class="col-md-6 col-sm-12 mb-4">
      <input type="password" class="form-control" name="confirmpassword" placeholder="Confirm password"/>

    </div>
    <div class="col-md-6 col-sm-12 mb-5">
      <input type="text" class="form-control" name="phone" placeholder="Phone" onChange={inputholder}/>
      
    </div>
    <div class="col-md-6 col-sm-12 ">
      <button type="submit" className="btn btn-dark btn-fnt w-100 fs-5" onClick={submitHandler}>Sign Up</button>
      
    </div>
  </div>
</form>    
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
