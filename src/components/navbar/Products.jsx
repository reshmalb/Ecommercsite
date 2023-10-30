import React from 'react'
import ProductCard from './Product'
import Slider from './Slider'
import all_product from '../../assets/Ecommerce_Frontend_Assets/all_product'
import newCollections from '../../assets/Ecommerce_Frontend_Assets/new_collections'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector,useDispatch } from 'react-redux'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination } from 'swiper/modules';
import NewCollections from './NewCollections'
import { useEffect } from 'react'
import { loadCartData } from '../../reduxstate/action/CartActions'
let initialLoad=true;


const Products = () => {
  const islogin=useSelector((state)=>state.autherization.isAuthenticated)
  const dispatch= useDispatch();



  const women= all_product.filter((product)=>product.category==='women')
  const men= all_product.filter((product)=>product.category==='men')
  const kid= all_product.filter((product)=>product.category==='kid')

  useEffect(()=>{
      if(islogin && initialLoad){
        dispatch(loadCartData());
        initialLoad=false;
        }

  },[]);


  return (
    < div className='m-0 p-0 bg-slate-200 w-full h-full'>
        <Slider/>

        
    < div  className= 'text-xl font-semibold text-center text-cyan-800 md:text-3xl m-3 bg-yellow-100'>
        New Collections
      </div>
      <div className='m-4'>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={false}
        breakpoints={{
          352:{
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {newCollections.map((item )=>(
          <SwiperSlide key={item.id}>
                 <NewCollections name={item.name} newprice={item.new_price} oldprice={item.old_price} image={item.image} category={item.category}/>
          </SwiperSlide>
       
        ))}
      </Swiper>

      </div>
    
      
     
    </div>
    
  )
}

export default Products;