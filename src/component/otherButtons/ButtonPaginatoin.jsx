import React from 'react'
import { useNavigate } from 'react-router-dom'
import propTypes from 'prop-types'

export const ButtonPaginatoin = ({ children, path }) => {

    const navigate = useNavigate()

    return (
        <button onClick={() => navigate( path )}>{children}</button>
    )
}

ButtonPaginatoin.propTypes = {
    children: propTypes.oneOfType([propTypes.string, propTypes.number]),
    path: propTypes.string
  }
  
  ButtonPaginatoin.defaultProps = {
    children: 'Go to',
    path: '/*'
  }
