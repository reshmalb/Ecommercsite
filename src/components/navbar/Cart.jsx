import React from 'react'
import { useSelector } from 'react-redux'
import CartDetails from './CartDetails'
import rupee_icon from '../../assets/Ecommerce_Frontend_Assets/rupee_icon.png'
import { useNavigate} from 'react-router-dom'

const CartItem = () => {
  const navigate=useNavigate();
  const islogin= useSelector((state)=>state.autherization.isAuthenticated)

  const cartitems=useSelector((state)=>state.cartitems.cartItems)
  const totalQuantity=useSelector((state)=>state.cartitems.totalQuantity)
  const totalAmount=useSelector((state)=>state.cartitems.totalAmount)
  const isEmpty= cartitems.length === 0 ? true :false;
  const handleContinueShopping=()=>{
    navigate('/')

}
  return (
    <div className='w-full min-h-[100vh]'>

    <div className='
    w-screen ml-0 space-y-1
    md:w-[600px] h-fit bg-slate-50  text-black 
    md:ml-[30%] border-2 
    md:space-y-2'>
       
       {isEmpty && ( <>
           <div className='h-auto md:w-auto md:h-10 bg-white text-gray-500  text-sm md:text-xl text-center m-20 border-gray-600'>Your Cart is Empty</div>
            <button type='click' onClick={handleContinueShopping} className='border-0  text-green-600 text-sm md:text-lg font-semibold top:0 underline  hover:text-green-400'>
               Start Shopping
             </button>
             </>)}
            
       {(!isEmpty && islogin) && (
       <>
      
       <div className='h-10 bg-white text-gray-500 text-lg  md:text-xl text-center border-b-2 border-gray-600'>Shopping Bag
       </div>   
           {cartitems.map((item)=>(
            <CartDetails key={item.cartId} item={item}/>
           ))}    
    
    <div className='flex flex-row justify-around h-10 bg-white text-green-700 text-xl '> 
    <div className='text-sm md:text-xl text-end m-2 md:m-4'>
        Total:
         </div>
      <div className='flex flex-row text-sm md:text-xl text-end m-2 md:m-4'>
        <img src={rupee_icon} alt="rupeeicon" className='w-2 h-2 md:w-4 md:h-4'/>{totalAmount}
         </div>
      </div>
    <div className='m-10 pb-4 text-center w-full'> 
      <button className='bg-blue-600 md:w-44 w-36  mt-10 md:h-10 h-8 md:text-lg text-sm rounded-md hover:bg-blue-400 text-center text-white'>Proceed to Pay</button>
      </div> 
       </>   )
}
    </div>
    </div>

  )
}

export default CartItem;