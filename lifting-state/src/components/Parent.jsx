import React from 'react';
import Child from './Child.jsx';

// same component
import SameComponent from './SameComponent.jsx';

// rendering component -> sibling component
import RenderingComponent from './RenderingComponent.jsx';

const style = {
  width: "100%",
  height: "500px",
  background: "#afd5aa"
}


export default function Parent() {
  // TODO
  return (
    <div style={style}>
      <div style={{ textAlign: "center" }}>Parent component</div>
      <div style={{ 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}>
        <Child>
          <SameComponent/>
        </Child>
        <Child>
          <RenderingComponent/>
        </Child>
      </div>
    </div>
  )
}