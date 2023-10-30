import React from 'react'
import productdata from '../assets/Ecommerce_Frontend_Assets/all_product'
import ProductCard from './navbar/Product'

const Category = ({category,banner}) => {
     const products= productdata.filter((data)=> data.category===category)
  return (
    < div className='category_container m-0 p-0'>
    <div className='banner m-0 p-0'>
      <img src={banner}/>
    </div>
    <div className='category   
        h-full
         w-full         
         flex
          flex-col
          items-center
          md:flex-row
           md:flex-wrap
           md:flex-grow
          md:p-7
          md:mx-10
       '
          >
       {products.map((product)=>(
        <ProductCard 
        id={product.id}
        image={product.image}
         name={product.name}
         newprice={product.new_price}
         oldprice={product.old_price}         
         />

       ))}
      </div>
    </div>
    
  )
}

export default Category