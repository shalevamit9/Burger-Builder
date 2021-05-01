import React from 'react';

import { Ingredients } from '../Burger/Burger';
import styles from './Order.module.css';

/**
 * @typedef {Object} OrderProps
 * @property {Ingredients} ingredients
 * @property {number} price
 */

/**
 * @param {OrderProps} props
 * @returns 
 */
const Order = props => {
    const ingredients = [];

    // My Way
    // for (const ingredientName in props.ingredients) {
    //     ingredients.push(`${ingredientName} (${props.ingredients[ingredientName]})`);
    // }
    // and then in the return use => {ingredients.join(' ')}

    // Teacher Way
    for (const ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    const ingredientOutput = ingredients.map(ingredient => {
        return (
            <span className={styles.Ingredient}
                key={ingredient.name}>
                {ingredient.name} ({ingredient.amount})
            </span>
        );
    });

    return (
        <div className={styles.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {props.price}</strong></p>
        </div>
    )
};

export default Order;
