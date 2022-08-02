import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Admin from '../pages/Admin/Admin';
import ErrorPage from '../pages/ErrorPage';
import Home from '../Home/Home';
import Cat from '../pages/Cat/Cat';
import App from '../../App';


function NavBar() {
  return (
    <Router>
    <Routes> 
    {/* Used instead of switch */}
    <Route path='/' element={<App/>}/>
    {/* main page of the route */}
    <Route path='/home' element={<Home/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/cat' element={<Cat/>}/>
    <Route path ='*' element={<ErrorPage/>}/>
    
    </Routes>
    </Router>
  );
}

export default NavBar;
