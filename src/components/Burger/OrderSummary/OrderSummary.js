import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

import { Ingredients } from '../Burger';

/**
 * @typedef {Object} OrderSummaryProps
 * @property {Ingredients} ingredients
 * @property {() => void} PurchaseCanceled
 * @property {() => void} PurchaseContinued
 */

/**
 * 
 * @param {OrderSummaryProps} props 
 * @returns 
 */
const OrderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingredientKey => (
            <li key={ingredientKey}>
                <span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}
            </li>
        ));
    
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button
                clicked={props.PurchaseCanceled}
                btnType="Danger">
                CANCEL
            </Button>
            <Button
                clicked={props.PurchaseContinued}
                btnType="Success">
                CONTINUE
            </Button>
        </Aux>
    );
};

export default OrderSummary;
