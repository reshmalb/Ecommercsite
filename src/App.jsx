import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'

import Navbar from './components/navbar/Navbar'
import Login from './components/Login'
import Products from './components/navbar/Products'
import {Routes,Route} from 'react-router-dom'
import Category from './components/Category'
import wbanner from './assets/Ecommerce_Frontend_Assets/banner_women.png'
import kbanner from './assets/Ecommerce_Frontend_Assets/banner_kids.png'
import mbanner from './assets/Ecommerce_Frontend_Assets/banner_mens.png'
import SingleProductDisplay from './components/navbar/SingleProductDisplay'
import LandingPage from './components/LandingPage'
import CartItem from './components/navbar/Cart'
import { useNavigate } from 'react-router-dom'
import Footer from './components/navbar/Footer'



function App() {

  const navigate=useNavigate();
  const [isExploreClicked,setExploreClicked]=useState(false)


  const handleExploreNow=(value)=>{
    setExploreClicked(value);
    if(value){
      navigate('/shop')
    }

 }

  return (
    < div className='overflow-x-hidden '>
      

      
         {isExploreClicked && (<Navbar/>)}
        
         <Routes>
         <Route path='/' element={<LandingPage isClicked={handleExploreNow} />} exact />


          <Route path='/shop' element={<Products/>} exact></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/women' element={<Category category='women' banner={wbanner}/>}></Route>
          <Route path='/men' element={<Category category='men' banner={mbanner}/>}></Route>
          <Route path='/kid' element={<Category category='kid' banner={kbanner}/>}></Route>
          <Route path='/singleproduct/:productid' element={<SingleProductDisplay/>}></Route>
          <Route path='/cart' element={<CartItem category='men' banner={mbanner}/>}></Route>


         </Routes>
       {isExploreClicked &&( <Footer/>)} 

      
    

    </div>
  )
}

export default App
