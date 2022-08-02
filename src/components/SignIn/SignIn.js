import React from "react";
import {useNavigate} from 'react-router-dom';

function SignIn(){
   let navigate = useNavigate();
return(
   <div className='join'>
   <h1>Sign In</h1>
   <div className='signIn'>
   <div className='input'>
   <input type='text' placeholder='Name...'></input>
   <input type='text' placeholder='Room'></input>
   </div>
   <button onClick={()=>{ navigate('/message')}}>Sign In to messages</button>
   </div>
   </div>
)
    
}
export default SignIn;