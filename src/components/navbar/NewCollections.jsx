import React from 'react'
import { useNavigate } from 'react-router-dom'

const NewCollections = ({image,name,newprice,oldprice,category}) => {

    const navigate=useNavigate()
    
  const handleAddToCart=(category)=>{
  
    if(category==='women'){
        navigate('/women')

    }
    else if(category==='men'){
        navigate('/men')

    }
    else if(category==='kid'){
        navigate('/kid')

    }
   
   
}



    
  return (
    <div className='flex flex-col
        w-52
        m-auto p-2 
        rounded-md 
        h-80
      bg-slate-300
        shadow-lg
         overflow-hidden
         cursor-pointer
         md:m-5
         md:bottom-6' >
          
        {/* <div className='singleproduct '> */}
        <button type='click'
              className='addtocart border-none 
               bg-transparent inset-0 text-sky-950 text-sm b
               text-end -my-1 z-10 '
                 onClick={handleAddToCart.bind(null,category)}> Shop Now</button>
            <img src={image} alt={image}></img>
        {/* </div> */}
        {/* <div className=''> */}

             <p className='tilte text-black  font-normal text-center text-sm'>{name}</p>
             <pre>Rs.{newprice} <text className='font-extralight text-red-500'>MRP:<strike >{oldprice}</strike></text></pre>
           
        {/* </div> */}
    </div>
  )
}

export default NewCollections