import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Cat.css';


function Cat() {
  let navigate = useNavigate();
  return (
    <div className='cat'>
    <h1>Cat  <button onClick={()=>{ navigate('/')}}>Back</button></h1>
    </div>
  )
}

export default Cat;