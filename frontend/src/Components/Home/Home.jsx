import React, { useEffect,  useState } from 'react'
import HedaerHome from './HedaerHome'
import './Home.css'
// import Slide from 'react-reveal/Slide';
import homebg from '../../Img/bgmain.png'
import TypeIt from "typeit-react";
import Books from './Books/Books';

const Home = () => {

const [isMounted, setIsMounted] = useState(false)




const typeit = ()=>{

  return (<p className='browse-section'>

  <TypeIt
        options={{
          strings: ["Browse and find your best read from our collection"],
          speed: 20,
          waitUntilVisible: false
          
        }}
      />

      </p>)
 }
  useEffect(() => {
   setIsMounted(true)
   
  return ()=>{
    setIsMounted(false)
   }
  }, []);
  return (
    <>
        <HedaerHome/>

      <main>
      <div className='mx-4 my-4 bg-style d-flex row'>
      <div className='col-sm-12 col-md-6'>
     
      <h1 className='text-st'>Discover libraries of full content with our annual subscription</h1>
      
      <p className='main-textdesc'>Monthly subscription allows you to get instant access to library of over thousand e-books which are  world known bestsellers</p>
      <button type="button" class="btn btn-dark main-btn">Get Premium</button>
      </div>
      <div className='col-sm-12 col-md-6'>
      <img className='img-fluid' src={homebg}  alt="book store" />
      </div>
      </div>
      </main>
      <div className="d-flex justify-content-center">
     { isMounted?typeit():null}
      </div>
      <div className="d-flex justify-content-center"><button type="button" class="btn btn-dark show-btn">Show All</button></div>

      <div className='mx-5 my-5'><Books/></div>
</>
  )
}

export default Home