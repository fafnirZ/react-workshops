import React, { useState } from 'react';

export default function SameComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // method 1
    // instantly returns
    setCount((prevState) => (prevState + 1));
    
    // method 2
    // use a callback function
    // setCount((prevState) => {
    //   return prevState+1;
    // })
  }
  return (
    <div style={{ 
      display: "flex",
      flexDirection: "column",
      justifyContent: "center", 
      alignItems: "center",
      padding: "100px",
      gridGap: "25px",
    }}>
      <p style={{textAlign: "center"}}>click the button to increment the counter</p>
      <button onClick={handleClick}>click me</button>
      <div>{count}</div>
    </div>
  )
}