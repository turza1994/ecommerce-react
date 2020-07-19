import React from 'react'

const Input = (props) => {
    return (
        <div>
            {props.children}
            <input type={props.type} name={props.name} onChange={props.handleChange} />
        </div>
    )
}

export default Input
