import React from 'react'
import heroimage1 from '../../assets/shoppingmain1.jpg'
import heroimage2 from '../../assets/Ecommerce_Frontend_Assets/trendy.jpg'
import heroimage3 from '../../assets/Ecommerce_Frontend_Assets/newarrival.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {

  const herodata=[
    {
      id:1,
      imgeUrl:heroimage1,
      title:"Latest Collections"
    },
    {
      id:2,
      imgeUrl:heroimage2,
      title:'New Arrivals'
    },
    {
      id:2,
      imgeUrl:heroimage3,
      title:'Trendy Designs'
    },
  ]

  
  return (
    <div className='flex justify-center'>
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={5000}>
          {
            herodata.map((item)=>(
              <div key={item.id} className='flex flex-col md:flex-row w-full'>
               
                <div  className='w-full md:w-[40%] text-center md:text-center text-xl md:text-6xl mt-10 md:mt-20  text-orange-950 font-bold items-center'>
                  {item.title}
                </div>
                <div  className='w-full md:w-[60%]'>
                <img src={item.imgeUrl} className='md:w-fit h-[400px] mr-0' />
                </div>
              
          </div>

            ))
          }
               
            
            </Carousel>
      </div>
  )
}

export default Slider