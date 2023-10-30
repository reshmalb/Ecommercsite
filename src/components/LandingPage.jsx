import React, { useEffect, useState } from 'react'
import Landpageimage from '../assets/shoppingmain1.jpg'
import shoppingvideo from '../assets/Ecommerce_Frontend_Assets/shoppingvideo.mp4'
import { useNavigate } from 'react-router-dom'

const LandingPage = ({isClicked}) => {
  const navigate=useNavigate();
  const [videoLoaded, setVideoLoaded] = useState(false);
  useEffect(()=>{
    isClicked(false);
  })
  const handleExploreNow=()=>{
   isClicked(true) 
  }
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };
  return (
    <div className='w-full  h-screen !h-screen-important '>
       <video src={shoppingvideo}
       autoPlay
       loop
       muted
       className='w-full h-full m-0 p-0 object-cover'
       onLoadedData={handleVideoLoaded}/>
     {videoLoaded && (   <div className='absolute w-[100%] h-[100%] top-0'>
        <div  className='text-cyan-600  text-xl m-20  md:text-6xl font-extrabold font-sans  md:m-60 '> Shoppers Stop... 
        <div className='text-white absolute font-semibold  md:m-30 text-lg md:text-3xl  '>Fashion on a Budget</div>
        <button type='click'
         className='text-white absolute
           text-sm font-thin md:text-xl
           ml-0
           md:font-extralight 
           mt-20 md:mt-32
           md:ml-10 w-[100px]
           p-0 h-fit md:w-60 
           md:h-8 bg-blue-500
           hover:bg-blue-300'
           onClick={handleExploreNow}>
            Explore Now
            </button>
         </div>     
          
      </div>)}
          
         

    </div>
  )
}

export default LandingPage