import React, {useState, useEffect} from "react";
import io from  'socket.io-client';
import './Chat.css';

let socket;
const CONNECTION_PORT= 'localhost:3002/'

function Chat(){
    //Before login
    const [room, setRoom]=useState('2022')
    const [userName, setUserName]=useState('User')

    // after login
    const [message, setMessage]=useState('');
    const [messageList, setMessageList]=useState([]);

    useEffect(()=>{
        socket = io(CONNECTION_PORT)
      }, [CONNECTION_PORT]);

      useEffect(()=>{
        socket.on ("receive_message", (data)=>{
            console.log(data);
            setMessageList([...messageList, data])
        } )
      })
    
    const sendMessage =()=> {
         let messageContent ={
            room: room,
            content:{
            author: userName,
            message: message
            },
        };

 
        socket.emit("send_message", messageContent);
        setMessageList([...messageList, messageContent.content]);
        setMessage("");
    };
    return(
        <div className="chatContainer">
        <div className="messages">
            {messageList.map((val, key)=>{
                return( 
                    <div className="messageContainer" id={val.author === userName ? "You" : "Other"}>
                    <div className="messageIndividual">{val.author} : {val.message}</div>  
                    </div>
                )
            })}
        </div>

        <div className="messageInputs">
            <input type="text" placeholder="Message..." onChange={(e)=> {setMessage(e.target.value)}}/>
            <button className="send" onClick={sendMessage}>Send</button>
        </div>

        </div>
    ) 
}
export default Chat;  