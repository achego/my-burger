import React from 'react'
import cs from './Button.module.css'

const Button = (props) => {
    return (
        <div 
            className={cs.Button}
            onClick={props.onClick}>
            {props.children}
        </div>
    )
}

export default Button
