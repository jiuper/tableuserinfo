import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonRemove } from '../../component/otherButtons/ButtonRemove'
import { useParams } from 'react-router-dom'
import './User.css'
export const User = ({ user, setUser }) => {

  const param = useParams()

  const [error, setError] = useState(null)

  return (
    <>
      {
        user.filter(e => e.id === Number(param.id))
          .map(
            e => (
              <div className='profile' key={e.id}>
                <div className='profile__item' >
                  <span>{e.name}</span>
                  <span>{e.surname}</span>
                  <span>{e.age}</span>

                </div>
                <div className='profile__button'>
                  <ButtonRemove
                    user={user}
                    setUser={setUser}
                    value={e.id}
                    setError={setError}
                  >
                    Удалить
                  </ButtonRemove>
                </div>
              </div>
            )
          )
      }
      {error}
      <div className='pagination'>
        <NavLink to={'/'}>Back</NavLink>
      </div>
    </>
  )
}
