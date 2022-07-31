import  React, { useEffect, useState } from "react";
import './App.css';
import io from  'socket.io-client';
import Chat from './components/Chat';



let socket;
const CONNECTION_PORT= 'localhost:3002/' //link for the backend

function App() {
  //Before login
  const [loggedIn, setLoggedIn]= useState(false) //checking if your logged in or not
  const [room, setRoom]=useState('Class  of pi')
  const [userName, setUserName]=useState('')



  useEffect(()=>{
    socket = io(CONNECTION_PORT)
  }, [CONNECTION_PORT]);

const connectToRoom = ()=>{
  setLoggedIn(true); // this is the one that makes the code err
  socket.emit('join_room', room);
};

// sends data to the backend. below here {* render page that will be displayed if not logged in and that is the input */}

  return (
    <div className="App">
    <h1 style={{fontFamily: "monospace"}}>Chatterly</h1>
    {!loggedIn ? (
       
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
      <div>
       <Chat/>
      </div>
    )}
    </div>
    
  );
}

export default App;