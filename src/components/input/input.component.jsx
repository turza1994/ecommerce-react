import React from 'react'

import './input.styles.scss';

const Input = ({children, handleChange, ...otherProps}) => {
    return (
        <div className="group">
            {children}
            <input className="input" onChange={handleChange} {...otherProps} />
        </div>
    )
}

export default Input
