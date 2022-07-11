import React from 'react'

export const ButtonAction = ({ user, newUser, setUser, setNewUser, children, handleAction }) => {
    return (
        <button className='button__style' onClick={() => handleAction(user, newUser, setUser, setNewUser)}>{children}</button>
    )
}
