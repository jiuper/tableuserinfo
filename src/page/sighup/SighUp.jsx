import React from 'react'
import { useState } from 'react'
import { ButtonPaginatoin } from '../../component/otherButtons/ButtonPaginatoin'
import './SighUp.css'
import { Form } from './Form'
export const SighUp = ({ user, setUser }) => {

  const [newUser, setNewUser] = useState(
    {
      name: '',
      surname: '',
      age: '',
      nationality: '',
      married: ''
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
        <ButtonPaginatoin path={'/Home'}>
          Home
        </ButtonPaginatoin>
        <ButtonPaginatoin path={'/Table'}>
          Table
        </ButtonPaginatoin>
      </div>
    </div>
  )
}
