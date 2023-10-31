import { addTocart,removeFromCart,loadInitialCartData } from "../reducers/CartSlice";
import axios from "axios";

export const  addToCartRequest=(newCartItem)=>{
  
     return async(dispatch)=>{
        const addCart=async()=>{
            const email=localStorage.getItem('email')
            const encodedEmail = btoa(email);
            const url=`https://apicallsproject-7e177-default-rtdb.firebaseio.com/EwebCartDetails/${encodedEmail}.json`;
             
                const response= await axios.post(url,newCartItem)
                if(!response.statusText==='OK'){
                    throw new Error("Authentication failed")
                }
                else{
                  
                    return response;
                }   
             }
           
        try{
           const responseData=await addCart();
           console.log(responseData)
           dispatch(addTocart({
            cartId:newCartItem.cartId,
            id:newCartItem.id,
            image:newCartItem.image,
            name:newCartItem.name,
            size:newCartItem.size,
            quantity:newCartItem.quantity,
            price:newCartItem.price,
            totalPrice:newCartItem.totalPrice
             
           }))


        }
        catch(error){
            console.log(error)

        }

     }

}

export const deleteCartItemRequest=(cartIdToDelete)=>{
      
      return async(dispatch)=>{
           const deleteCartItem=async()=>{
            const email = localStorage.getItem('email');
            const encodedEmail = btoa(email);
            const url = `https://apicallsproject-7e177-default-rtdb.firebaseio.com/EwebCartDetails/${encodedEmail}`;
        
            try {
                const response = await axios.get(`${url}.json`);
                if (response.data) {
                    const userCart = response.data;
                    for (const key in userCart) {
                        if (userCart[key].cartId === cartIdToDelete) {
                            const itemToDeleteUrl = `${url}/${key}.json`;
                         const deleteResponse=    await axios.delete(itemToDeleteUrl);
                         return deleteResponse;
                          
                    }
            }
        }
    }
    catch(error){

        console.log(error)

       }
            }
            try{
               const responsedata= await  deleteCartItem();

               dispatch(removeFromCart({
                cartId: cartIdToDelete
              }));

            }
            catch(error){

                console.log(error)
    
               }
           
        }
    }

    export const loadCartData= ()=>{
         

        return async(dispatch)=>{
            const loadCart=async()=>{

                const email = localStorage.getItem('email');
                const encodedEmail = btoa(email);
                const url = `https://apicallsproject-7e177-default-rtdb.firebaseio.com/EwebCartDetails/${encodedEmail}`;
            
                try {
                    const response = await axios.get(`${url}.json`);
                    console.log(response.data)
                    if (response.data) {
                        const userCart = response.data;
                        return userCart;                          
                              
                        }
                    }          
              catch(error){    
                   console.log(error);    
                   }
                }    
                try{
                   const usercartdata=  await loadCart();   
                   const cartItems=[] ;
                   for (const key in usercartdata) {
                    const newItem={
                        cartId:usercartdata[key].cartId,
                        id:usercartdata[key].id,
                        image:usercartdata[key].image,
                        title:usercartdata[key].name,
                        size:usercartdata[key].size,
                        quantity:usercartdata[key].quantity,
                        price:usercartdata[key].price,
                        totalPrice:usercartdata[key].totalPrice
                   }     
                   cartItems.push(newItem) 

                }
                dispatch(loadInitialCartData({ cartItems:cartItems || [] }))
                
            }
                catch(error){

                }
            }
        
    }
              
           
        
              
