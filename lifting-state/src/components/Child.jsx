import React from 'react';

const style = {
  width: "30%",
  height: "80%",
  margin: "30px",
  background: "#ffc6d9"
}


export default function Child({ children }) {
  return (
    <div style={style}>
      <div style={{ textAlign: "center" }}> Child </div>
      {children}
    </div>
  )
}