import React from 'react'
import { handleProfile } from '../user/function'
import propTypes from 'prop-types'

export const Item = ({ id, name, surname, age, setProfile, user }) => {
    return (
        <div className='table__item' key={id} onClick={()=> handleProfile(id, setProfile,user ) }>
            <span>{name}</span>
            <span>{surname}</span>
            <span>{age}</span>
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