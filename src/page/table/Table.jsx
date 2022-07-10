import React from 'react'
import { ItemsList } from './ItemsList'
import { NavLink } from 'react-router-dom'
import './Table.css'
import propTypes from 'prop-types'

export const Table = ({ user }) => {

  return (
    <div className='table'>
      <div className='table__head'>
        <span>name</span>
        <span>surname</span>
        <span>age</span>
      </div>
      <div className='table__body'>
        <ItemsList
          user={user}
        />
      </div>

      <div className='pagination'>
        <NavLink to={'/SighUp'}>Add new user</NavLink>
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