import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.css';

/**
 * @typedef {Object} Ingredients
 * @property {number} salad
 * @property {number} bacon
 * @property {number} cheese
 * @property {number} meat
 */

/**
 * @typedef {Object} BurgerProps
 * @property {Ingredients} ingredients The ingredients for the burger
 */

/**
 * @param {BurgerProps} props 
 */
const Burger = props => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
                return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />;
            });
        })
        .reduce((arr, element) => arr.concat(element), []);
    
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger;
