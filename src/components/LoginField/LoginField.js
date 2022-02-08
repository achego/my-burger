import React from 'react'
import cs from './LoginField.module.css'
import { FaLock } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'

const LoginField = () => {
    return (
        <div className={cs.LoginField}>
            <div className={cs.inputField}>
                <FaLock className={cs.icon}/>
                <input type='password' placeholder='Password' />
                <FaEye className={cs.showPassword}/>
            </div>
            <p>Forgot Password?</p>
        </div>
    )
}

export default LoginField
