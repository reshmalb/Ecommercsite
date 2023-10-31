import {useState } from 'react'

import Navbar from './components/navbar/Navbar'
import Login from './components/Login'
import Products from './components/navbar/Products'
import {Routes,Route} from 'react-router-dom'
import Category from './components/Category'
import wbanner from './assets/Ecommerce_Frontend_Assets/banner_women.png'
import kbanner from './assets/Ecommerce_Frontend_Assets/banner_kids.png'
import mbanner from './assets/Ecommerce_Frontend_Assets/banner_mens.png'
import SingleProductDisplay from './components/navbar/SingleProductDisplay'
import CartItem from './components/navbar/Cart'
import { useNavigate } from 'react-router-dom'
import Footer from './components/navbar/Footer'



function App() { 

 

  return (
    < div className='overflow-x-hidden '>
      

      
         <Navbar/>
        
         <Routes>
         {/* <Route path='/' element={<LandingPage isClicked={handleExploreNow} />} exact /> */}


          <Route path='/' element={<Products/>} ></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/women' element={<Category category='women' banner={wbanner}/>}></Route>
          <Route path='/men' element={<Category category='men' banner={mbanner}/>}></Route>
          <Route path='/kid' element={<Category category='kid' banner={kbanner}/>}></Route>
          <Route path='/singleproduct/:productid' element={<SingleProductDisplay/>}></Route>
          <Route path='/cart' element={<CartItem category='men' banner={mbanner}/>}></Route>


         </Routes>
        <Footer/>

      
    

    </div>
  )
}

export default App
