import { createSlice } from "@reduxjs/toolkit";

const initialAuth={
     isAuthenticated:false,
     token:null,
     email:null,
}


export const LoginSlice = createSlice(
  { 
     name:'authentication',
  initialState:initialAuth,
     reducers:{
        login(state,action){
            state.isAuthenticated=true;
            state.token=action.payload.token;
            state.email=action.payload.email;
            localStorage.setItem('email',state.email)
            localStorage.setItem('token',state.token)
           
        },
        logout(state){
            state.isAuthenticated=false;
            state.token=null;
            state.email=null;
            localStorage.removeItem('token');
            localStorage.removeItem('email')
        },

     }
    }
);


export const{ login,logout} = LoginSlice.actions;
export default LoginSlice.reducer;
