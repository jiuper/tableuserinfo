import React from 'react'

export const ButtonAdd = ({ user, newUser, setUser, setNewUser, children, addNewUser }) => {
    return (
        <button onClick={() => addNewUser(user, newUser, setUser, setNewUser)}>{children}</button>
    )
}
