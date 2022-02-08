import React from 'react'
import IconAndName from '../IconAndName/IconAndName'
import cs from './BottomNav.module.css'
import { FaLock, FaMoneyBill, FaMicrophone } from 'react-icons/fa'

import { AiOutlineRadiusSetting } from 'react-icons/ai'

const BottomNav = () => {
    return (
        <div className={cs.BottomNav}>
            <IconAndName iconName='Login' bold><FaLock /></IconAndName>
            <IconAndName iconName='Quick Service' ><FaMoneyBill /></IconAndName>
            <IconAndName iconName='Support' ><FaMicrophone /></IconAndName>
            <IconAndName iconName='Settings' ><AiOutlineRadiusSetting /></IconAndName>
        </div>
    )
}

export default BottomNav
