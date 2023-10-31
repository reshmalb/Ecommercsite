import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { LoginRequest, SignUpRequest } from '../reduxstate/action/LoginActions';



const Login = () => {
  const islogin= useSelector((state)=>state.autherization.isAuthenticated)
  const navigate =useNavigate();
  const dispatch= useDispatch();

  // const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const [isLogin,setLogin]=useState(islogin)

  const title = isLogin === true ? 'Create Account':'Login' ;
  const buttonTitle= isLogin === true ? 'Signup' :'Login';
  const reference= isLogin === true ? 'Create new Account': 'To Login';

  const handleReferenceClick=()=>{
    setLogin((prev)=> !prev)
  }

const handleAccount=( )=>{
   if(buttonTitle==='Signup'){
    const user={
      // name:name,
      email:email,
      password:password
  }
     SignUpRequest(user)
    //  .then((status)=>{

   }
   else if(buttonTitle==='Login'){
    const user={
    
      email:email,
      password:password
       }
     dispatch(LoginRequest(user));
    //  if(islogin){
      navigate('/')
   
    //  }

   }
  //  setName('');
   setEmail('');
   setPassword('');


}

  return (
    <div className='w-full h-[100vh]'>
    <div className='login 
     w-[300px] h-[300px]
     flex
     flex-col
     ml-[20%]
     m-10
      shadow-xl
      rounded-xl
      md:justify-center
      md:items-center
      md:ml-[40%]'>
         
           <div className='px-5 ml-4 mr-5 mt-5
             text-blue-700
             font-bold
             text-xl
          '>{title}</div>
       
        <input type='email'
         placeholder='Email'
         className='px-2 ml-5 mr-5 mt-5 w-64 h-7 shadow-lg rounded-md border-1 focus:bg-pink-200'
         required
         onChange={(e)=>setEmail(e.target.value)}
        value={email} />
          <input type='password'
         placeholder='Password'
         className='px-2 ml-5 mr-5 mt-5 w-64 h-7 shadow-lg rounded-md focus:bg-pink-200'
         required
         onChange={(e)=>setPassword(e.target.value)}
         value={password}/>
         <button type='submit'
           className='bg-blue-500 
           px-2 ml-5 mr-5
            mt-5 w-64 h-7 
            shadow-lg rounded-md 
            text-white
            hover:bg-blue-400'
            onClick={handleAccount}>{buttonTitle}</button>
           <div
           className='px-2 ml-5 mr-5 mt-5 w-auto text-black'> {reference}
           <a href='#' className='text-blue-600 underline hover:text-blue-300' onClick={handleReferenceClick}> Click here </a>
            </div> 

    </div>
    </div>
  )
}

export default Login