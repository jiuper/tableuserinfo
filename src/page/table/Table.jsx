import React from 'react'
import { ButtonPaginatoin } from '../../component/otherButtons/ButtonPaginatoin'
import { Item } from './Item'
import { ItemsList } from './ItemsList'
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
          nationality='nationality'
          married='married'
        />
      </div>
      <div className='table__body'>
        <ItemsList
          user={user}
          setProfile={setProfile}
        />
      </div>
      <div className='pagination'>
        <ButtonPaginatoin path={'/Home'}>
          Home
        </ButtonPaginatoin>
        <ButtonPaginatoin path={'/SighUp'}>
          Add new user
        </ButtonPaginatoin>
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
    nationality: propTypes.string,
    married: propTypes.string
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
      nationality: 'belka',
      married: 'married'
    }
  ]
}