import React from 'react'
import cs from './Country.module.css'

const Country = (props) => {
    return (
        <div
         className={cs.Country}
         style={{
             border: props.selected&&'1px solid black'
         }}>
            <div></div>
            <label>{props.countryName}</label>
        </div>
    )
}

export default Country
