import React from 'react'
import { handleProfile } from '../user/function'
import propTypes from 'prop-types'

export const Item = ({ id, name, surname, age, nationality, married, setProfile, user }) => {
    return (
        <div className='table__item' key={id} onClick={()=> handleProfile(id, setProfile,user ) }>
            <span>{name}</span>
            <span>{surname}</span>
            <span>{age}</span>
            <span>{nationality}</span>
            <span>{married}</span>
        </div>
    )
}

Item.propTypes = {
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

Item.defaultProps = {
    user: [
        {
            id: Date.now(),
            name: 'name',
            surname: 'surname',
            age: 'age',
            nationality: 'nationality',
            married: 'married'
        }]
}