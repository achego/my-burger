import React from 'react'
import cs from './IconAndName.module.css'

const IconAndName = (props) => {
    return (
        <div
            className={cs.IconAndName}
            style={{
                fontWeight: props.bold?700:500,
                color: props.bold&&'#4e4e4e'
            }}>
            {props.children}
            <label>{props.iconName}</label>
        </div>
    )
}

export default IconAndName
