import React from 'react'

import './input.styles.scss';

const Input = (props) => {
    return (
        <div className="group">
            {props.children}
            <input className="input" type={props.type} name={props.name} onChange={props.handleChange} />
        </div>
    )
}

export default Input
