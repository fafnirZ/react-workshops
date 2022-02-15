import React, { useState, useEffect } from 'react';


export default function Correct() {
  // useState creates and stores a 'reactive' variable
  // whenever this variable is changed, this entire component will re-render
  const [counter, setCounter] = useState(0);

  // empty dependency 
  // only called once (on-mount)
  useEffect(() => {
    console.log("hello");
  },[])

  // will run this every re-render
  // notice that "hello" is only logged once
  // and will only log when page gets refreshed
  useEffect(() => {
    console.log("rerendered");
  })

  // will call this whenever counter changes
  useEffect(() => {
    console.log(counter)
  },[counter])


  return (
    <>
      <button onClick={() => { setCounter(prev => prev + 1) }}>click me</button>
      <div>
        {counter}
      </div>
    </>
  )
}