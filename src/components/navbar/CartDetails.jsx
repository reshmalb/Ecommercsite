  import React,{useState,useEffect} from 'react'
  import delete_icon from '../../assets/delete_icon.png'
  import { useDispatch} from 'react-redux';  
   import { addToCartRequest ,deleteCartItemRequest} from '../../reduxstate/action/CartActions'


  const CartDetails = ({item}) => {

    const dispatch=useDispatch();

    const { id, image, title, size, quantity, price, totalPrice,cartId } = item;
   

    const [quantityState,setQuantityState]= useState(quantity ||1);

              const updateCart=(quantityState)=>{
                        console.log("update quantity",quantityState)
                        let  newCartitem={}
                            
                                          const total= quantityState * price;
                                              const newquantity=  quantityState;
                                                    newCartitem={
                                                                  id:id,
                                                                  cartId:cartId,
                                                                  image:image,
                                                                  name:title,
                                                                  quantity:quantityState,
                                                                  size:size,
                                                                  price: price,
                                                                  totalPrice:total
                                                                }
                                                    
                                                  dispatch(addToCartRequest(newCartitem))                                  

                                }
      
    

    const handleIncrementQuantity=()=>{
      setQuantityState((prev) => prev + 1);
      updateCart(quantityState + 1);
    }
  const handleDecrementQuantity=()=>{
    if (quantityState > 1) {
      setQuantityState((prev) => prev - 1);
      updateCart(quantityState - 1);

  }
}
         
  const handleDeleteCartItem=(e)=>{
    e.preventDefault();
    confirm("Do you want to remove this Item?")
      dispatch(deleteCartItemRequest(cartId))
  }


   
  return (
    <div className=' w-screen h-fit md:w-full md:h-32 bg-white shadow-lg md:shadow-xl  flex flex-row md:space-x-2 '> 
      <div className='h-fit w-10  mt-2 ml-0  md:h-fit md:w-14 md:m-4'><img src={image} alt="productimage"/></div>
      <div className='w-28 text-xs  mt-2 ml-1  md:text-md md:m-4 md:h-fit'>{title}</div>
      <div className='w-14  mt-5 ml-0 md:m-10 h-fit'>{size}</div>
      <div  className='w-14   mt-5 ml-0 md:m-10 h-fit'>{quantity}</div>
      <div  className='w-14 mt-5 ml-0 md:m-10 h-fit'>{price}</div>
      <div  className='w-14  mt-5 ml-0 md:m-10 h-fit'>{totalPrice}</div>
      <div className='flex  flex-col ml-0 md:flex-row mt-1 md:mt-6'>
          <button type='click' className='w-5 h-5 m-0 bg-gray-600 text-white  md:mt-5 cursor-pointer hover:bg-slate-300' onClick={handleDecrementQuantity} >-</button>
          <button  type='click' className='w-5 h-5 m-0  bg-white text-gray-600  md:mt-5 cursor-pointer hover:bg-slate-300' value={quantityState} >{quantityState}</button>
          <button type='click' className='w-5 h-5 m-0 bg-gray-600 text-white md:mt-5 cursor-pointer hover:bg-slate-300' onClick={handleIncrementQuantity}>+</button>          
      </div>
      <div className='w-6 ml-6 mt-7 md:mt-10 h-8  bg-slate-100 shadow-xl space-x-1 md:ml-3  hover:bg-slate-300 ' onClick={handleDeleteCartItem}>
        <img src={delete_icon} alt='deleteicon' className=' w-5 h-7 cursor-pointer hover:transform' />
        </div>

     
      </div>
  )
}

export default CartDetails;