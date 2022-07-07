import React from 'react'
import { Item } from './Item'
import propTypes from 'prop-types'

export const ItemsList = ({ user, setProfile }) => {
    let tableUser = user.map(elem =>
        <Item
            key={elem.id}
            id={elem.id}
            name={elem.name}
            surname={elem.surname}
            age={elem.age}
            nationality={elem.nationality}
            married={elem.married}
            setProfile={setProfile}
            user={user}
        />
    )
    return (
        <>
            {tableUser}
        </>
    )
}

ItemsList.propTypes = {
    user: propTypes.arrayOf(propTypes.shape({
        id: propTypes.oneOfType([propTypes.number, propTypes.string]),
        name: propTypes.string,
        surname: propTypes.string,
        age: propTypes.number,
        nationality: propTypes.string,
        married: propTypes.string
    })),
    setAccounts: propTypes.func
}

ItemsList.defaultProps = {
    user: [
        {
            id: Date.now(),
            name: 'Maria',
            surname: 'Pechan',
            age: 28,
            nationality: 'belka',
            married: 'married'
        }]
}