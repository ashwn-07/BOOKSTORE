import React from "react";
import sideimg from "../../Img/book.jpg";
import "./Signup.css";

const Signup = () => {
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
      <input type="text" class="form-control" placeholder="Name"/>
    </div>
    <div class="col-md-6 col-sm-12 mb-4">
      <input type="text" class="form-control" placeholder="email"/>

    </div>
    <div class="col-md-6 col-sm-12 mb-5">
      <input type="text" class="form-control" placeholder="Phone"/>
      
    </div>
    <div class="col-md-6 col-sm-12 ">
      <button type="submit" className="btn btn-dark btn-fnt w-100 fs-5">Sign Up</button>
      
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
