import React from 'react';

import Burger, { Ingredients } from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import styles from './CheckoutSummary.module.css';

/**
 * @typedef {Object} CheckoutSummaryProps
 * @property {Ingredients} ingredients
 * @property {() => void} checkoutCanceled
 * @property {() => void} checkoutContinued
 */

/**
 * @param {CheckoutSummaryProps} props
 * @returns 
 */
const CheckoutSummary = props => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div className={styles.CheckoutSummaryDiv}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                btnType="Danger"
                clicked={props.checkoutCanceled}>
                CANCEL
            </Button>
            <Button
                btnType="Success"
                clicked={props.checkoutContinued}>
                CONTINUE
            </Button>
        </div>
    );
}

export default CheckoutSummary;
