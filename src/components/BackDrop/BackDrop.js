import React from 'react'
import cs from './BackDrop.module.css'

const BackDrop = (props) => {
    return (
        <div 
            className={props.show?cs.BackDrop:null}
            onClick={props.onClick}>
            
        </div>
    )
}

export default BackDrop
