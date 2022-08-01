import React from "react";
import {BrowserRouter  as Router, Route, Routes} from 'react-router-dom';
import App from "../App";
import Chat from "./Chat";
import Message from "./Message";
import TextName from "./TextName";



function Join(){
return(
    <div>
 <Router>
    <Routes>
    <Route  path="/"  exact element={<App/>}/>
    <Route  path="/chat"  exact element={<Chat/>}/>
    <Route  path="/message"  exact element={<Message/>}/>
 </Routes>    
    </Router>
    </div>
)
    
}
export default Join;