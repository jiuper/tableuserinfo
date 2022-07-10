import React from 'react'

export const Input = ({ nameTitle, value, user, setValue, handleAction }) => {
    return (
        <>
            <span>{nameTitle}</span>
            <input value={value} onChange={(e) => handleAction(e.target.value, user, nameTitle, setValue)} />
        </>

    )
}
