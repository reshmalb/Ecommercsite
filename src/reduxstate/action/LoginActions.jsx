import {login,logout} from '../reducers/LoginSlice'
import axios from 'axios'

export const LoginRequest=(user)=>{
  return async(dispatch)=>{
              const loginData  = async()=>{
                const encodedPassword=btoa(user.password)

                          const response=await axios.post(
                              'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBmu2iAn2bEUPLR2hBHCQAhknCpMMWjz3o',{
                                  email:user.email,
                                  password:encodedPassword,
                                  returnSecureToken:true,
                              })
                              if(!response.statusText==='OK'){
                                alert("Invalid Credentials.. Login Failed")
                              }
                              else{
                                
                                  return response;
                              }         
                      }

                    try{
                    const   responseData=await loginData()
                       dispatch(login({
                                  token:responseData.data.idToken,
                                  email:responseData.data.email}))
                      }
                    catch(error){
                      console.log(error.message)
                    }
}


}

export const SignUpRequest = async(user)=>{
   
        try {
          const encodedPassword=btoa(user.password)
          const response = await axios.post(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBmu2iAn2bEUPLR2hBHCQAhknCpMMWjz3o', // Replace with your API key
            {
              email: user.email,
              password: encodedPassword,
              name: user.name,
              returnSecureToken: true,
            }
          );
    
          if (response.status === 200) {
            alert('Sign up successful.. Login to continue');
          } else {
            alert('Sign up failed');
          }
        } catch (error) {
          console.error(error);
          alert('Sign up failed');
        }
      
    }

      
