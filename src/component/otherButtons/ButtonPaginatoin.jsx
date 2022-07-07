import React from 'react'
import { useNavigate } from 'react-router-dom'
export const ButtonPaginatoin = ({ children, path }) => {

    const navigate = useNavigate()

    return (
        <button onClick={() => navigate( path )}>{children}</button>
    )
}
