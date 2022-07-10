import React from 'react'
import { Item } from './Item'
import propTypes from 'prop-types'


export const ItemsList = ({ user }) => {

    return (
        <>
            {
                    user.length !== 0
                    ?  user.map(elem =>
                        <Item
                            key={elem.id}
                            id={elem.id}
                            name={elem.name}
                            surname={elem.surname}
                            age={elem.age}
                            user={user} 
                        />
                    )
                    : <div>No found</div>
            }
        </>
    )
}

ItemsList.propTypes = {
    user: propTypes.arrayOf(propTypes.shape({
        id: propTypes.oneOfType([propTypes.number, propTypes.string]),
        name: propTypes.string,
        surname: propTypes.string,
        age: propTypes.number,
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
        }]
}