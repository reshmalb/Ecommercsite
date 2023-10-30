import React from 'react'
import facebookimage from '../../assets/Ecommerce_Frontend_Assets/icon-facebook-30.png'
import copyright from '../../assets/Ecommerce_Frontend_Assets/icons8-copyright-24.png'
import twitter from '../../assets/Ecommerce_Frontend_Assets/icons-twitter-50.png'
import whatsapp from '../../assets/Ecommerce_Frontend_Assets/icons8-whatsapp-30.png'

    

const Footer = () => {
  return (
    <div className=' w-full h-24 flex flex-col  text-white bg-sky-900  '>
        <div className='w-full h-10 m-1 flex flex-row justify-center items-center'>
            <img src={facebookimage} alt="socialIcons" className='w-5 h-5 ml-3 md:w-10 md:h-10' />
            <img src={twitter} alt="socialIcons" className='w-5 h-5 ml-3 md:w-10 md:h-10' />
            <img src={whatsapp} alt="socialIcons"  className='w-5 h-5 ml-3 md:w-10 md:h-10'/>
        </div>
        <div className='flex justify-center text-sm'>
        Copyright
        <img src={copyright} alt="socialIcons"   className='w-5 h-5 ml-3'/> :Designed by Reshma.


        </div>

    </div>
  )
}

export default Footer