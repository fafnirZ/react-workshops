import React, { useState, useEffect } from 'react'

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users?id=1'

export default function Loading() {
  // this is okay
  // will not require you to do isloading
  const [user, setUser] = useState({
    id: 0,
    name: "",
    website: "",
  })

  // this will crash
  // const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(API_ENDPOINT)
    .then(data => {
      return data.json()
    })
    .then(data => {
      console.log(data[0]);
      setUser(data[0])
    })
  },[])

  // if(!user) {
  //   return (
  //     <div>loading...</div>
  //   )
  // }

  return (
    <div style={{
      display:"flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div>name : {user.name}</div>
      <div>website: {user.website}</div>
    </div>
  )
}
