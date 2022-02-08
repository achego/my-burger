import React from 'react'
import Logo from '../../../../components/Logo/Logo'
import { FaAngleDown } from 'react-icons/fa'
import cs from './Head.module.css'

const Head = (props) => {
    return (
        <div className={cs.Head}>
            <div className={cs.logoName}>
                <Logo />
                <p>access</p>
            </div>
            <div
                className={cs.countries}
                onClick={props.showM}>
                <div></div>
                <FaAngleDown />
            </div>
        </div>
    )
}

export default Head
