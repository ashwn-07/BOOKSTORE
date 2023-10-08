import React, { useEffect, useState } from "react";
import UserHeader from "./UserDash/UserHeader";
import './Profile.css'
import axios from "../../api/axios";
import useAuth from "../../Hooks/UseAuth";
import useAxiosPrivate from "../../Hooks/UseAxiosPrivate";

const UserProfile = () => {


  const [isEditClicked, setIsEditClicked]= useState(false);
  const [details, setDetails] = useState();
  const [phone, setPhone]= useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [msg, setMsg] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const {auth}= useAuth();
  const {id} = auth 
  const axiosPrivate = useAxiosPrivate();


  useEffect(  ()=>{
  
  const callapi = async ()=>{
    try {
      const {data} = await axiosPrivate.get(`user/${id}`);
      
      setName(data.name)
      setPhone(data.phone)
      setEmail(data.email)
     } catch (error) {
       console.log(error)
     }

  }
callapi();
   
   

  },[])
  
    const handleSubmit = async (e)=>{
    try {
      e.preventDefault();
    const data =   await axiosPrivate.put(`user/edit/${id}`, {
        name, email, phone
        }, {
          withCredentials:true
        })
        setMsg(data.data.message)
        setIsSuccess(true)

        setTimeout(() => {
          setIsSuccess(false)
          setMsg("")
        }, 3000);

    } catch (error) {
      console.log(error)
      if(error.response.status==400){
        setMsg(error.response.data.message)
        setIsSuccess(true)

        setTimeout(() => {
          setIsSuccess(false)
          setMsg("")
        }, 3000);
      }
      
    }

    }
    return (
        <>
            <UserHeader />
            <div className="row  justify-content-center">
            <div className="shadow mt-3 col-lg-3 profile-container ">
                <div className="card p-3 text-center">
                    <div className="d-flex flex-row justify-content-center mb-3">
                        <div className="image col-lg-1 col-2">
                            {" "}
                            <img
                                src="https://www.pngfind.com/pngs/m/80-804723_png-file-svg-profile-picture-square-icon-transparent.png"
                                className="rounded-circle img-fluid"
                            />{" "}
                            <span>
                                <i className="bx bxs-camera-plus"></i>
                            </span>{" "}
                        </div>
                        <div className="d-flex flex-column ms-3 user-details">
                            <h4 className="mb-0">{name}</h4>
                            
                        </div>
                    </div>
                    <h4>Edit Profile</h4>
                    <div className="row">
                        <div className="col-md-6 col-lg-12">
                            <div className="inputs">
                                {" "}
                                <label className="">Name</label>{" "}
                                <input className="form-control" type="text" placeholder="Name" value={name} disabled={isEditClicked?false:true} onChange={(e)=>setName(e.target.value)} />{" "}
                            </div>

                            {/* {` ${isEditClicked?"form-control":"disable-edit"}`} */}
                        </div>
                        <div className="col-md-6 col-lg-12">
                            <div className="inputs">
                                {" "}
                                <label>Email</label>{" "}
                                <input className="form-control" type="text" placeholder="Email" name="email" value={email} disabled={isEditClicked?false:true} onChange={(e)=>setEmail(e.target.value)} />{" "}
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-12">
                            <div className="inputs">
                                {" "}
                                <label>Phone</label>{" "}
                                <input className="form-control" type="text" name="phone" placeholder="Phone" value={phone} disabled={isEditClicked?false:true} onChange={(e)=>setPhone(e.target.value)} />{" "}
                            </div>
                        </div>
                       
                    </div>
                   
                    <div className="mt-3 gap-2 d-flex justify-content-center">
                        {" "}
                        {isEditClicked?<button className="px-3 btn btn-sm btn-outline-primary" onClick={(e)=>setIsEditClicked(false)}>Cancel</button>:null}{" "}
                        {isEditClicked?<button className="px-3 btn btn-sm btn-primary" onClick={handleSubmit}>Save</button>:<button className="px-3 btn btn-sm btn-primary" onClick={()=>setIsEditClicked(true)}>Edit</button>}{" "}
                        <p className={isSuccess?"show-msg":"hide-msg"}>{msg}</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default UserProfile;
