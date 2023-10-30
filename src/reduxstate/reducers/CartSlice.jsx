import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialCart={
     cartItems:[],  
     totalAmount:0,
     totalQuantity:0
};


const CartSlice= createSlice({
    name:'cartitems',
    initialState:initialCart,
    reducers:{
                loadInitialCartData(state,action){
                     state.cartItems=[...action.payload.cartItems];
                     const newtotal= state.cartItems.reduce((sum,curr)=>sum+=curr.totalPrice,0)
                     state.totalAmount=newtotal;     
                     const newTotalQuantity=state.cartItems.reduce((sum,curr)=>sum+=curr.quantity,0)  
                     state.totalQuantity=newTotalQuantity;     

                },


        addTocart(state,action){
              //finding existing item with same id and size
            const existingItem= state.cartItems.find((item)=>(item.cartId === action.payload.cartId));
            if(existingItem){
                   existingItem.quantity= action.payload.quantity
                   //finding new price
                   const newPrice=Number.parseFloat(action.payload.quantity) * Number.parseFloat(action.payload.price);
                   //updating the price state
                    existingItem.totalPrice=action.payload.totalPrice;
                    //updating the totalAmount

                    const newtotal= state.cartItems.reduce((sum,curr)=>sum+=curr.totalPrice,0)
                    state.totalAmount=newtotal;     
                    const newTotalQuantity=state.cartItems.reduce((sum,curr)=>sum+=curr.quantity,0)  
                    state.totalQuantity=newTotalQuantity;         
          
            
            }
            else{
                const newItem = {
                    cartId: action.payload.cartId,
                    id: action.payload.id,
                    image:action.payload.image,
                    title: action.payload.name,
                    size: action.payload.size,
                    quantity: action.payload.quantity,
                    price:action.payload.price,                    
                    totalPrice:action.payload.totalPrice
                  };
                  state.cartItems.push(newItem);
                  const newtotal= state.cartItems.reduce((sum,curr)=>sum+=curr.totalPrice,0)
                  state.totalAmount=newtotal; 
                  const newTotalQuantity=state.cartItems.reduce((sum,curr)=>sum+=curr.quantity,0)  
                  state.totalQuantity=newTotalQuantity;    
                }


        },
        removeFromCart(state,action){
            const itemsToRemove= state.cartItems.find((item)=>(item.cartId===action.payload.cartId));
                 state.totalAmount-=itemsToRemove.totalPrice;
                 state.totalQuantity-=itemsToRemove.quantity;
                  state.cartItems= state.cartItems.filter((item)=>item.cartId!= action.payload.cartId)
            
            }

        },
      
    }
)

export const {addTocart,removeFromCart,loadInitialCartData}= CartSlice.actions;

export default CartSlice.reducer;