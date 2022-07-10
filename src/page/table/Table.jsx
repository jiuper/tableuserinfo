import React from 'react'
import { Item } from './Item'
import { ItemsList } from './ItemsList'
import { NavLink } from 'react-router-dom'
import './Table.css'
import propTypes from 'prop-types'

export const Table = ({ user, setProfile }) => {

  return (
    <div className='table'>
      <div className='table__head'>
        <Item
          id={123}
          name='name'
          surname='surname'
          age='age'
        />
      </div>
      <div className='table__body'>
        <ItemsList
          user={user}
          setProfile={setProfile}
        />
      </div>
      <div className='pagination'>
        <NavLink to={'/SighUp'}>Add new user</NavLink>
        <NavLink to={'/User'}>Info User</NavLink>
      </div>
    </div>
  )
}

Table.propTypes = {
  user: propTypes.arrayOf(propTypes.shape({
    id: propTypes.oneOfType([propTypes.number, propTypes.string]),
    name: propTypes.string,
    surname: propTypes.string,
    age: propTypes.number,
  })),
  setProfile: propTypes.func,
}

Table.defaultProps = {
  user: [
    {
      id: Date.now(),
      name: 'Maria',
      surname: 'Pechan',
      age: 28,
    }
  ]
}