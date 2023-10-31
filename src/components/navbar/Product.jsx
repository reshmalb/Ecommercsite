import React from 'react'
import {useNavigate,useParams} from 'react-router-dom'

const ProductCard = ({id,image,name,newprice,oldprice}) => {

  const navigate=useNavigate();
  const handleAddToCart=()=>{
    navigate(`/singleproduct/${id}`)
    
  }
  return (
    <div className='flex flex-col
      w-44 
       ml-10 mt-3 p-2 
        rounded-md 
        h-80
      bg-slate-300
        shadow-lg
         overflow-hidden
         cursor-pointer
         md:m-5
         md:bottom-6' >
        <div className='singleproduct '>
            <img src={image} alt={image}></img>
        </div>
        <div className=''>

             <p className='tilte text-black  font-normal text-center text-sm'>{name}</p>
             <pre>Rs.{newprice} <text className='font-extralight text-red-500'>MRP:<strike >{oldprice}</strike></text></pre>
             <button type='click'
              className='addtocart border-none 
               bg-blue-600  text-white
                p-1 mx-5 my-2'
                 onClick={handleAddToCart}> Add to cart</button>
        </div>
    </div>
  )
}

export default ProductCard