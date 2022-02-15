import React from 'react';
export default function RenderingComponent() {
  // TODO connect this component so that it will be re-rendered when the button 
  // from sibling component is pressed
  return (
    <div style={{ 
      display: "flex",
      flexDirection: "column",
      justifyContent: "center", 
      alignItems: "center",
      padding: "100px",
      gridGap: "25px",
    }}>
      <div>
        counter
      </div>
      <div>
        0
      </div>
    </div>
  )
}