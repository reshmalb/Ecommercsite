import React ,{useState}from 'react'
import logo_icon from '../../assets/logo.png'
import cart_icon from '../../assets/Ecommerce_Frontend_Assets/carticon.png'
import close_icon from '../../assets/Ecommerce_Frontend_Assets/closeicon.png'
import { useSelector,useDispatch } from 'react-redux'
import { logout } from '../../reduxstate/reducers/LoginSlice'

import {Link} from 'react-router-dom'

const Navbar = () => {

  const islogin= useSelector((state)=>state.autherization.isAuthenticated);
  const totalQuantity=useSelector((state)=>state.cartitems.totalQuantity);
  const dispatch=useDispatch();

  const [isHamClick,setHamClick]=useState(false)

  const categoryClasses=`category
  absolute
  z-10
  md:z-0
   md:static
    inset-0
     text-white
      w-20 mt-16
      h-28
       bg-sky-700
       opacity-90
       py-2
       px-2       
       md:py-0
       md:opacity:100
       md:h-auto
        md:bg-inherit
        md:flex
        md:space-x-6 md:w-auto md:mt-4 ${isHamClick ? 'translate-x-50': '-translate-x-96'} md:translate-x-0 `;

        const mobilenavclasses=`harmburger 
        inline-block 
        py-4 px-2
        cursor-pointer
         md:hidden ${isHamClick === true ? 'hidden':''}`
         const closeiconClass=`closeicon w-8 h-10 mt-3 cursor-pointer md:hidden ${isHamClick ===false? 'hidden':''}`
        const hamburgerCilcked=()=>{
          setHamClick((prev)=>!prev)
        }


  const logoutHandler=()=>{
    dispatch(logout());

  }

  return (

    <nav className= 'bg-sky-900 w-full mb-3  h-16 flex justify-between ' >
     <div className='mobileleft flex  space-x-3 justify-between '>
        <div className={mobilenavclasses}
         onClick={hamburgerCilcked}>
                <div className='line h-0.5 w-6 my-1 bg-white' ></div>
                <div className='line h-0.5 w-6 my-1 bg-white' ></div>
                <div className='line h-0.5 w-6 my-1 bg-white' ></div>
      </div>
       <div className={closeiconClass} onClick={hamburgerCilcked}>
        <img  src={close_icon} />
       </div>
            <div  className='logo ml-0 flex-row'>
                <div className='logoimage'>
                <img src={logo_icon} className='px-2 w-20 h-12'/>
                </div>
             
           <div className='brand text-white m-0 font-light text-xs'>Shoppers Stop</div>
    
            </div>
        
     </div>
     <div className={categoryClasses}>

            <div className='cursor-pointer hover:underline active:underline-offset-2 hover:underline-offset-8'><Link className='decoration-0' to="/">Shop </Link></div>
            <div className='cursor-pointer hover:underline hover:underline-offset-8'><Link className='decoration-0' to="/men">Mens </Link></div>
            <div className='cursor-pointer hover:underline hover:underline-offset-8'><Link className='decoration-0' to="/women">Womens </Link></div>
            <div className='cursor-pointer hover:underline  hover:underline-offset-8'><Link className='decoration-0' to="/kid">Kids</Link></div>

        </div>
     <div className='mobileright flex text-white py-4 mr-10 space-x-3'>
               {!islogin &&(<div className='login cursor-pointer hover:underline hover:underline-offset-8 '><Link className='decoration-0' to='/login'>Login</Link></div>)}

                <div className='cart cursor-pointer hover:underline hover:underline-offset-8 flex flex-col'> <Link to="/cart">
                  <div className='w-5 h-5 mt-[-12px]  mb-[-8px] ml-2 z-10 rounded-xl bg-red-600 py-[-10px] px-1'>{islogin ===true ? totalQuantity : 0}</div>
                  <img src={cart_icon} alt='cartIcon'></img>
                  </Link>
                 
                </div>
                {islogin &&(<div className='login cursor-pointer hover:underline hover:underline-offset-8 '><Link className='decoration-0' to='/login' onClick={logoutHandler}>Logout</Link></div>)}

        </div> 


        </nav>

  )
}

export default Navbar