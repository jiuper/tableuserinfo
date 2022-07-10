import React from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonRemove } from '../../component/otherButtons/ButtonRemove'
import { useParams } from 'react-router-dom'
import './User.css'
export const User = ({ user, profile, setUser, setProfile }) => {

  const { name } = useParams()

  return (
    <div className='profile'>

      {
        user.filter(e => e.id === name)
      }
      <div className='profile__item' id={profile.id}>
        <span>{profile.name}</span>
        <span>{profile.surname}</span>
        <span>{profile.age}</span>
      </div>
      <div className='profile__button'>
        <ButtonRemove
          value={profile.id}
          user={user}
          setUser={setUser}
          setProfile={setProfile}
        >
          Удалить
        </ButtonRemove>
      </div>
      <div className='pagination'>
        <NavLink to={'/Table'}>Table</NavLink>
      </div>
    </div>
  )
}
