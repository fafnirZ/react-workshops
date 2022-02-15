import React from 'react';


export default function Broken() {

  let counter = 0;
  console.log(counter);

  return (
    <>
      <button onClick={() => { counter += 1 } }>click me</button>
      <div>
        {counter}
      </div>
    </>
  )
}