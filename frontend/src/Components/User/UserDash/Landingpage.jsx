import React from "react";
import UserHeader from "./UserHeader";
import gonegirl from "../../../Img/gone-girl.jpg";
import './L.css'

const Landingpage = () => {
    return (
        <div>
            <UserHeader />

            <div className="row">
                <div className="col-lg-12  ms-5 mt-4">
                    <div className="row">
                    <div className="col-lg-2">
                        <img className="img-fluid cover-img" src={gonegirl} alt="hii" />
                    </div>
                           <div className="col-lg-4  rev-st"><h1>Reviews</h1></div>
                           </div>

                    <div className="col-lg-12 pt-3"> 
                    <h2>Gone Girl</h2>
                    <p>Author: <span>Gillian Flynn</span></p>
                        <h5>ISBN:<span>Gillian Flynn</span></h5>
                        <h5>Year:<span>Gillian Flynn</span></h5>
                        <h5>Genre:<span>Gillian Flynn</span></h5>
                        <h5>Availability: <span>Rented</span></h5>
                        
                        <button className="btn btn-color">Rent</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landingpage;
