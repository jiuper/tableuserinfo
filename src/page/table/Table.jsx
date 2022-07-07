import React from 'react'
import { ButtonPaginatoin } from '../../component/otherButtons/ButtonPaginatoin'
import { Item } from './Item'
import { ItemsList } from './ItemsList'
import './Table.css'

export const Table = ({user}) => {



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
        />
      </div>
      <div className='pagination'>
        <ButtonPaginatoin path={'/Home'}>
          Back
        </ButtonPaginatoin>
        <ButtonPaginatoin path={'/SighUp'}>
          Add new user
        </ButtonPaginatoin>
      </div>
    </div>
  )
}
