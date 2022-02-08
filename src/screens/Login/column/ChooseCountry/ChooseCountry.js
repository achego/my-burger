import React from 'react'
import BackDrop from '../../../../components/BackDrop/BackDrop'
import Button from '../../../../components/Button/Button'
import allCountries from '../../../../rawData'
import cs from './ChooseCountry.module.css'
import Country from './Country/Country'

const ChooseCountry = (props) => {

    const countries = allCountries.map(country => {
        return <Country
            key={country.country}
            countryName={country.country}
            image={country.imge}
            selected={country.selected} />
    })

    return (
        <React.Fragment>
            <BackDrop
                show={props.showModal}
                onClick={props.showModalH} />
            <div
                className={cs.ChooseCountry}
                style={props.showModal ?{
                    transform: 'translateY(0vh)',
                }:null}>
                <div>
                    <label>Choose a Country</label>
                    <div className={cs.countries}>
                        {countries}
                    </div>
                </div>
                <div>
                    <label>Choose a Language</label>
                    <div className={cs.countries}>
                        <Country />
                    </div>
                </div>
                <Button onClick={props.showModalH}>Confirm</Button>
            </div>
        </React.Fragment>
    )
}

export default ChooseCountry
