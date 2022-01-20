import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import cs from './BuildControls.module.css'

const BuildControls = (props) => {

    let disableOrder = true
    for (const key in props.ingredients) {
       if (props.ingredients[key] > 0) {
            disableOrder = false
       }
    }

     const controls = Object.keys(props.ingredients).map(ingr => {
         let disabled = false
         if (props.ingredients[ingr] <= 0){
             disabled = true
         }
         return (
         <BuildControl
            key={ingr} 
            ingredient={ingr}
            addIngredient={() => props.addIngredient(ingr)}
            removeIngredient={() => props.removeIngredient(ingr)}
            disabled={disabled}/>
     )
    })

    return (
        <div className={cs.BuildControls}>
            <p className={cs.price}>Current price : <strong>${props.totalPrice.toFixed(2)}</strong></p>
            {controls}
            <button 
                className={cs.orderNow}
                disabled={disableOrder}>order now</button>
        </div>
    )
}

export default BuildControls
