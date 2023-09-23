import React from "react";
import gonegirl from '../../../Img/gone-girl.jpg'
import HedaerHome from "../HedaerHome";

const Bookdetail = () => {
    return (
<>
        <HedaerHome/>
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12 ">
                        <h1>Gone Girl</h1>
                        <p>Author: <span>Gillian Flynn</span></p>
                        <h5>ISBN:<span>Gillian Flynn</span></h5>
                        <h5>Year:<span>Gillian Flynn</span></h5>
                        <h5>Genre:<span>Gillian Flynn</span></h5>
                    </div>
                    <div className="col-md-6 col-sm-12 ">
                       <div className="d-flex w-50 justify-content-center "><img className="img-fluid cover-img" src={gonegirl} alt="hii" /></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Bookdetail;
