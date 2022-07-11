import React from 'react'
import { handleRemove } from '../../page/user/function'
export const ButtonRemove = ({ value, user, setUser,setError, children }) => {
    
    return ( 
        <button className='button__style' onClick={() => handleRemove(value, user, setUser,setError)}>{children}</button>
    )
}
