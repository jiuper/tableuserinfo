import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './SighUp.css'
import { Form } from './Form'
export const SighUp = ({ user, setUser }) => {

  const [newUser, setNewUser] = useState(
    {
      name: '',
      surname: '',
      age: '',
    }
  )

  return (
    <div className='form'>
      <Form
        newUser={newUser}
        setNewUser={setNewUser}
        user={user}
        setUser={setUser}
      />
      <div className='pagination'>
        <NavLink to={'/Table'}>Back</NavLink>
      </div>
    </div>
  )
}
