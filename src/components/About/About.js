import React from 'react'
import './About.css';
import {useNavigate} from 'react-router-dom';


function About() {
  let navigate = useNavigate();

  return (
    <div className='about'>

    <h3  style={{fontSize:'15px'}}>
    <u >Fun:</u> 
    <h3>Welcome to Chatterly App. A chat app that allows you to chat with your friends. 
     <h3>To proceed, please go to the SignIn page and enter your username and the room you would like to join.<button onClick={()=>{ navigate('/')}}>Back</button></h3>
      <h3>If you  would like to see cute cat gifs  pleace proceed to Gifs. </h3>
      <h3>You can chck out fun facts of cats below:</h3>
      <h3><li>Cats can jump up to 6 times their height.</li></h3>
      <h3><li>They have a total of 18 toes.</li></h3>
      <h3><li>Cats sleep for around 13 to 16 hours a day. </li></h3>
      <h3><li>1 year of a cats life equals to 15 years of a humans live.</li></h3>
      <h3><li>Purring means a cat is content.</li></h3>
      <h3><li>The oldest cat was 38 years old.</li></h3>
      <h3><li>Cats can dream.</li></h3>
      <h3><li>Each cat’s nose is unique, much like human fingerprints.</li></h3>
      <h3><li>Cats are believed to be the only mammals who don’t taste sweetness.</li></h3>
      </h3>
    </h3>
    
    
   
    
    
</div>
    
  )
}

export default About;