import React from 'react'

export const Item = ({ id, name, surname, age, nationality, married }) => {
    return (
        <div className='table__item' key={id}>
            <span>{name}</span>
            <span>{surname}</span>
            <span>{age}</span>
            <span>{nationality}</span>
            <span>{married}</span>
        </div>
    )
}
