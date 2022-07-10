import React from 'react'
import { handleRemove } from '../../page/user/function'
export const ButtonRemove = ({ value, user, setUser, children }) => {
    
    return ( 
        <button onClick={() => handleRemove(value, user, setUser)}>{children}</button>
    )
}
