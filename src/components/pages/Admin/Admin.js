import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Admin.css';


function Admin() {
  let navigate = useNavigate();
  return (
    <div className='admin'>
    <h1>Admin  <button onClick={()=>{ navigate('/')}}>Back</button></h1>
    
    </div>
  )
}

export default Admin;