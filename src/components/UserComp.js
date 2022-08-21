import React from 'react'
import '../App.css'

export default function UserComp({user}) {
  return (
    <div className='User_component'>
        <h3>{user.name}</h3>
        <p>Id : {user.govtId}</p>
        <p>Address : {user.address}</p>
        <a href="">view all details</a>
    </div>
  )
}
