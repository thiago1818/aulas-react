import React, { useState, useEffect } from 'react'
import User from './components/User'

export default function App() {

  // state
  const [users, setUsers] = useState([])

  // effect
  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(json => {
        setUsers(json.users)
      })
  }, [])

  return (
    <>
      <h1>React Hooke - useEffect com API</h1>
      <h3>Usuários</h3>
      {users.map(user => {
        return <User key={user.id} user={user} />
      })}
    </>
  )
}