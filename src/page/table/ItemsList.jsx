import React from 'react'
import { Item } from './Item'

export const ItemsList = ({ user }) => {
    let tableUser = user.map(elem =>
        <Item
            key={elem.id}
            id={elem.id}
            name={elem.name}
            surname={elem.surname}
            age={elem.age}
            nationality={elem.nationality}
            married={elem.married}
        />
    )
    return (
        <>
            {tableUser}
        </>
    )
}
