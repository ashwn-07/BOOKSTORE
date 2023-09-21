import React from 'react'
import './LogIn.css'

const Login = () => {
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
      <input type="text" class="form-control" placeholder="email"/>
    </div>
    <div class="col-md-6 col-sm-12 mb-4">
      <input type="password" class="form-control" placeholder="password"/>

    </div>
   
    <div class="col-md-6 col-sm-12 ">
      <button type="submit" className="btn btn-color btn-fnt w-100 fs-5">Log In</button>
      
    </div>
  </div>
         </form>
    </div>
    </div>
    </>
  )
}

export default Login