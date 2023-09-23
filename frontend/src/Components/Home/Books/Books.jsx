import React, { useEffect, useState } from 'react'
import axios from 'axios';
import gonegirl from '../../../Img/gone-girl.jpg'
import './Books.css'
import { Link } from 'react-router-dom';

const Books = () => {
const [books, setbooks] = useState([]);



useEffect(()=>{

  axios.get("http://localhost:8000/api/randombooks")
  .then((response)=>{
    console.log(response.data)
    setbooks(response.data.message)
  })
  .catch((error)=>{
   console.log(error)
  })

}, [])


  return (
    <div className='row g-4 '>
        {books.map((key, val)=>(

        <div className="col-md-3 col-lg-2">
          <div className='book-container'>
            <img className="img-fluid cover-img" src={gonegirl} alt="hii" />

                <h3 className='book-title'>{val.title}</h3>
              <div className='d-flex justify-content-center'><Link to={'/bookdetails'}><button className='btn details-btn'>Details</button></Link></div>  
          </div>
        </div>))}
     
    </div>
  )
}

export default Books