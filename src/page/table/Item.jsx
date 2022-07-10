import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const Item = ({ id, name, surname, age}) => {
    
    return (
        <div className='table__item' key={id} >
            <Link to={`/${id}`}>
            <span>{name}</span>
            <span>{surname}</span>
            <span>{age}</span>
            </Link>
        </div>
    )
}

Item.propTypes = {
    user: propTypes.arrayOf(propTypes.shape({
        id: propTypes.oneOfType([propTypes.number, propTypes.string]),
        name: propTypes.string,
        surname: propTypes.string,
        age: propTypes.number,
    })),
    setAccounts: propTypes.func
}

Item.defaultProps = {
    user: [
        {
            id: Date.now(),
            name: 'name',
            surname: 'surname',
            age: 'age',
        }]
}