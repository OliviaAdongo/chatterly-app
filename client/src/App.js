import  React, { useEffect, useState } from "react";
import './App.css';
import io from  'socket.io-client';


let socket;
const CONNECTION_PORT= 'localhost:3001/' //link for the backend

function App() {
  const [loggedIn, setLoggedIn]= useState(false) //checking if your logged in or not
  const [room, setRoom]=useState('')
  const [userName, setUserName]=useState('')

  useEffect(()=>{
    socket = io(CONNECTION_PORT)
  }, [CONNECTION_PORT]);

const connectToRoom= ()=>{
  setLoggedIn=(true)
  socket.emit('join_room', room)
} 

  return (
    <div className="App">
    <h1>Chatterly</h1>
    {!loggedIn ? (
      // {* render page that will be displayed if not logged in and that is the input */}
     <div className="logIn">
        <div className="input">
          <input type="text" placeholder="Name..." 
          onChange={(e)=> {setUserName(e.target.value)}}/>
          <input type="room" placeholder="Room..." 
          onChange={(e)=> {setRoom(e.target.value)}}/>
        </div>
        <button onClick={connectToRoom}>Enter</button>
     </div>
    ): (
     // {/* render this page if you are logged in */}
      <div className="chatContainer">
      </div>
      
    )}
    </div>
  );
}

export default App;