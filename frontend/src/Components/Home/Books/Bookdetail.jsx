import React, { useEffect, useState } from "react";
import gonegirl from '../../../Img/gone-girl.jpg'
import HedaerHome from "../HedaerHome";
import axios from "../../../api/axios";
import { useParams } from "react-router-dom";

const Bookdetail = () => {

    const [book, setBook] = useState({});
    const {id} = useParams();


useEffect(()=>{
    axios.get(`books/${id}`)
        
    .then((response) => {
        console.log(response.data.Data);
        setBook(response.data.Data);
    })
    .catch((error)=>{
        console.log(error)
    })
},[])
   


    return (
<>
        <HedaerHome/>
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12 ">
                    <div className="d-flex w-50 justify-content-center "><img className="img-fluid cover-img" src={book.imageUrl} alt="hii" /></div>
                    </div>
                    <div className="col-md-6 col-sm-12 ">
                      
                       <h1>{book.title}</h1>
                        <p>Author: <span className="text-secondary">{book.author}</span></p>
                        <h5>ISBN:<span  className="text-secondary">{book.isbn}</span></h5>
                        <h5>Year:<span  className="text-secondary">{new Date(book.year).getFullYear()}</span></h5>
                        <h5>Genre:<span  className="text-secondary">{book.genre}</span></h5>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Bookdetail;
