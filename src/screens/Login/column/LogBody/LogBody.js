import React from 'react'
import Button from '../../../../components/Button/Button'
import LoginField from '../../../../components/LoginField/LoginField'
import cs from './LogBody.module.css'

const LogBody = () => {
    return (
        <div className={cs.LogBody}>
            <p>Welcome back, <span>Joshua</span></p>
            <LoginField />
            <Button>Sign in</Button>
            <h4>Not Joshua? <span>Unlock device</span></h4>
        </div>
    )
}

export default LogBody
