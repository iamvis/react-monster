import React from 'react'

const Greeting = () => {
    const greeting_message= "welcome to the jsx worild !...";
   
  
    let current_date= new Date();
    const name="John";

  return (
    <div>
        <h1>{greeting_message}</h1>
        <p>{current_date.getDate()}</p>
        <h1>{current_date.toLocaleTimeString()}</h1>
        
      
    </div>
  )
}

export default Greeting
