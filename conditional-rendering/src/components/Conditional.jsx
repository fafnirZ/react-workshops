import React, { useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function Conditional() {

  const [status, setStatus] = useState(null);
  
  const renderStatus = () => {
    switch(status) {
      case "approved":
        return <CheckCircleIcon/>
        // usually need break statement;
      case "denied":
        return <CancelIcon/>
      default:
        return <div>...pending</div>
    }
  }
  return (
    <div style={{
      display:"flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems:"center",
    }}>
      <div>
        Rendering components
      </div>
      {/* {renderStatus()} */}
      {status === "approved" && <CheckCircleIcon/>}
      {status === "denied" && <CancelIcon/>}
      {!status && (
        <div>...pending</div>
      )}
    </div>
  )
}
