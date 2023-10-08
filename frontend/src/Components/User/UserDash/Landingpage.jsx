import React, { useEffect, useState } from "react";
import UserHeader from "./UserHeader";
import { Link } from "react-router-dom";
import "./L.css";
import axios from "../../../api/axios";

const Landingpage = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, SetIsLoading] = useState(true);
    useEffect(() => {
        axios
            .get("books")
            .then((response) => {
                setBooks(response.data.data);
                SetIsLoading(false)
            })

            .catch((error) => {
                console.log(error);
            });
    }, []);
  
    return (
        <div>
           { isLoading?<p>Loading....</p>:(<><UserHeader />

            <div className="row m-0 bg-color">
                
            {books.map((value, index)=>( <div  key={index} className="col-lg-4   ps-5 mt-4">
                    <div className="row mb-5">
                        <div className="col-lg-6">
                            <img className="img-fluid cover-img" src={value.imageUrl} alt="hii" />
                        </div>

                    <div className="col-lg-6 pt-3">
                        <h3>{value.title}</h3>

                       
                        <Link className="text-dec"  to={`/review/${value._id}`}> <button className="btn btn-color">Review</button></Link>
                        <Link to={`/rent/${value._id}`}> <button className="btn btn-color">Rent</button></Link>
                    </div>
                        
                    </div>

                   
                </div>))};
            </div></>)}
        </div>
    );
};

export default Landingpage;
