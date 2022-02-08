import React, { useState } from 'react'
import BottomNav from '../../components/BottomNav/BottomNav'
import ChooseCountry from './column/ChooseCountry/ChooseCountry'
import Head from './column/Head/Head'
import LogBody from './column/LogBody/LogBody'
import cs from './Login.module.css'

const Login = () => {

    const [showModal, setshowModal] = useState(false)

    const showModalH = () => {
        setshowModal(!showModal)
    }
    console.log(showModal);
    return (
        <div className={cs.Login}>
            <Head showM={showModalH} />
            <LogBody />
            <BottomNav />
            <ChooseCountry
                showModal={showModal}
                showModalH={showModalH} />
        </div>
    )
}

export default Login
