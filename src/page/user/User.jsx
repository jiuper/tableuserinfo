import React from 'react'
import { ButtonPaginatoin } from '../../component/otherButtons/ButtonPaginatoin'
import { ButtonRemove } from '../../component/otherButtons/ButtonRemove'
import './User.css'
export const User = ({ user, profile, setUser, setProfile }) => {

  return (
    <div className='profile'>
      <div className='profile__item' id={profile.id}>
        <span>{profile.name}</span>
        <span>{profile.surname}</span>
        <span>{profile.age}</span>
        <span>{profile.nationality}</span>
        <span>{profile.married}</span>
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
