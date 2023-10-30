import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import AutherizationReducer from '../reducers/LoginSlice'
import CartReducer from '../reducers/CartSlice'

const store= configureStore({
    reducer:{
        autherization:AutherizationReducer,
        cartitems:CartReducer
    }
},applyMiddleware(thunk))

export default store;