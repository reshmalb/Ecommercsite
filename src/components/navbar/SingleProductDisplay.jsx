import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams,useNavigate} from 'react-router-dom'
import productdata from '../../assets/Ecommerce_Frontend_Assets/all_product'

import rupeeIcon from '../../assets/Ecommerce_Frontend_Assets/rupee_icon.png'
import { v4 as uuidv4 } from 'uuid';
import { addToCartRequest } from '../../reduxstate/action/CartActions'


const SingleProductDisplay = () => {

  const islogin=useSelector((state)=>state.autherization.isAuthenticated)
  const cartitems=useSelector((state)=>state.cartitems.cartItems)
  const dispatch=useDispatch();
  const navigate=useNavigate();


    const {productid}=useParams();
    const [selectSize,setSelectedSize]=useState('');
    const [selectQuantity,setSelectQuantity]=useState(0);
    const [quantityMessage,setQuantityMessage]=useState('');
    const [sizeMessage,setSizeMessage]=useState('')
    const [openModal,setOpenModal]=useState(false)
    const [open,setOpen]=useState(false)


    const data = productdata.filter((item)=> item.id == productid)
    const sizeClass = (size) => {
        return `w-7 h-6 px-1 cursor-pointer 
         bg-slate-400 text-sm md:shadow-lg 
         md:w-8 md:h-8 md:p-1 md:text-md md:font-bold ${
            selectSize === size ? 'bg-blue-600 text-white' : ''
        }`;
    };
    const handleSize=(size)=>{
        setSelectedSize(size)
        setSizeMessage('')
    }

    const handleIncrementQuantity=()=>{
        setSelectQuantity((prev)=>{
            return prev=prev+1;
        })
        setQuantityMessage('')
    }
    const handleDecrementQuantity=()=>{
        setSelectQuantity((prev)=>{
            return prev === 0 ? 0: prev-1;
        })
        setQuantityMessage('')
    }
    const handleAddtoCart=(e)=>{
        e.preventDefault();

        if(islogin){
                        if(selectQuantity===0){
                            setQuantityMessage('Select Quantity')
                        }
                        if( selectSize==='')
                        {
                                setSizeMessage('Select Size')
                        }
                        if(selectQuantity !==0 && selectSize !==''){
                            const existingItem= cartitems.filter((item)=> item.id===data[0].id && item.size===selectSize );
                            let newCartitem={}
                            const totalPrice= selectQuantity*data[0].new_price;
                             if(existingItem.length > 0){
                                const newquantity= existingItem[0].quantity+selectQuantity;
                                const newTotalPrice= existingItem[0].totalPrice+totalPrice;
                                  newCartitem={
                                    id:data[0].id,
                                    cartId:existingItem[0].cartId,
                                    image:data[0].image,
                                    name:data[0].name,
                                    quantity:newquantity,
                                    size:selectSize,
                                    price: data[0].new_price,
                                    totalPrice:newTotalPrice

                                 }

                                }else
                                   {

                                    newCartitem={
                                        id:data[0].id,
                                        cartId: uuidv4(),
                                        image:data[0].image,
                                        name:data[0].name,
                                        quantity:selectQuantity,
                                        size:selectSize,
                                        price: data[0].new_price,
                                        totalPrice:totalPrice

                                }
                           
                                  
                                }

                                dispatch(addToCartRequest(newCartitem))
                         
                        }

        }else{
            alert("Login to continue")
        }

        setSelectedSize('');
        setSelectQuantity(0);

            
    }




    const handleContinueShopping=()=>{
        navigate('/shop')

    }
    const handleGotoCart=()=>{
        navigate('/cart')

    }
  return (
    <>
     <div className='w-full flex flex-row justify-around'>
            <button type='click' onClick={handleContinueShopping} className='border-0  text-green-600 text-sm md:text-lg font-semibold underline  hover:text-green-400'>
                Continue Shopping
             </button>
            <button type='click' onClick={handleGotoCart} className='border-0 text-green-600 text-sm md:text-lg font-semibold underline hover:text-green-400'>
                Go to cart
            </button>
            </div>
    <div className='w-full bg-transparent shadow-xl flex 
    md:w-[80%] md:ml-32 md:h-full'>
       
        <div className='left flex flex-col p-4'>
           <div className='image w-[50px] h-[50px]
            bg-transparent m-5
             md:w-[100px] md:h-[100px] md:m-6  cursor-pointer'>
                <img src={data[0].image} alt='productphoto' />
            </div>
            <div className='image w-[50px] h-[50px] bg-transparent m-5
            md:w-[100px] md:h-[100px] md:m-6  cursor-pointer'>
                <img src={data[0].image} alt='productphoto' />
            </div>
            <div className='image w-[50px] h-[50px] bg-transparent m-5
            md:w-[100px] md:h-[100px] md:m-6 cursor-pointer'>
                <img src={data[0].image} alt='productphoto' />
            </div>
            <div className='image w-[50px] h-[50px] bg-transparent m-5
            md:w-[100px] md:h-[100px] md:m-6 cursor-pointer'>
                <img src={data[0].image} alt='productphoto' />
            </div>
           
        </div>
        <div className='middle  flex-col justify-center mt-10 w-[80%] 
          md:flex-row md:flex'> 
             <div className='w-[300px] h-[200px] bg-transparent 
              flex md:w-[500px] md:h-[500px]'>
                 <img src={data[0].image} alt='productphoto'  />
             </div>
       
             <div className='right flex flex-col'>
                    <div className='text-sm font-bold w-[200px] md:text-lg md:w-full md:mt-10'>{data[0].name}</div>
                     <div className='selectsize flex space-x-3 mt-4 md:ml-10 md:mt-10 '> 
                            <div className={sizeClass('XS')} onClick={()=>handleSize('XS')}>XS</div>
                            <div className={sizeClass('S')} onClick={()=>handleSize('S')}>S</div>
                            <div className={sizeClass('L')} onClick={()=>handleSize('L')}>L</div>
                            <div className={sizeClass('XL')} onClick={()=>handleSize('XL')}>XL</div>
                            <div className={sizeClass('XXL')} onClick={()=>handleSize('XXL')}>XXL</div>
                            <div className='text-red-500 font-semibold text-sm md:text-lg'>{sizeMessage}</div>    
                    </div> 
                    <div className=' flex flex-row mt-10'>
                        <sup><img className=' w-3 h-3 md:w-5 md:h-5' src={rupeeIcon} alt="rupeeimage"/></sup>
                        <text className='text-lg font-bold md:text-3xl'>{data[0].new_price} </text>  
                        <text className='ml-5 text-lg md:ml-10 md:text-xl w-fit bg-red-500 text-white'>M.R.P: <strike> {data[0].old_price}</strike></text>
                    </div>
                    <div className=' flex flex-row mt-5 md:mt-10 space-x-5'>
                        <text className=' font-medium space-x-5 text-gray-600 md:font-semibold'>Category:<text className='space-x-5 text-gray-600 font-semibold'> {data[0].category}</text> </text>
                    </div>
                    <div className='quantity space-x-2 '>
                        <text className=' font-medium space-x-5 text-gray-600 md:font-semibold'>Quantity:</text>
                        <button className='w-5 h-5 md:w-10 md:h-10 bg-gray-500  text-white md:text-xl hover:bg-gray-400  md:rounded-lg rounded-sm shadow-lg' onClick={handleDecrementQuantity}>-</button>
                        <button type='text' className='text-black w-5 h-5   md:w-10 md:h-10  border-2 px-0 text-sm border-gray-600 md:border-2 md:border-gray-600 md:px-3 md:rounded-lg rounded-sm shadow-lg' value={selectQuantity}>{selectQuantity}</button>
                        <button  className='w-5 h-5  md:w-10 md:h-10 bg-gray-500 text-white md:text-xl hover:bg-gray-400  md:rounded-lg rounded-sm shadow-lg' onClick={handleIncrementQuantity}>+</button>
                        <div className='text-red-500 font-semibold text-sm md:text-lg'>{quantityMessage}</div>
                    </div>
                <div className='addtocartContainer'>
                 <button type='click' className='w-[70%]
                  bg-green-500 m-3 
                  md:mt-10 h-10 p-[1.5%]
                   shadow-lg rounded-lg
                   text-white
                   font-semibold
                   text-xl
                   hover:bg-green-800'
                   onClick={handleAddtoCart}>ADD TO CART</button>
               </div>
            </div>
              
        </div>    
    </div>
    </>

  )
}

export default SingleProductDisplay