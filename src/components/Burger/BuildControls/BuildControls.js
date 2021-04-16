import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

/**
 * @typedef {Object} Disabled
 * @property {boolean} salad
 * @property {boolean} bacon
 * @property {boolean} cheese
 * @property {boolean} meat
 */

/**
 * @typedef {Object} BuildControlsProps
 * @property {(type: string) => void} ingredientAdded
 * @property {(type: string) => void} ingredientRemoved
 * @property {Disabled} disabled
 * @property {number} price
 */

/**
 * 
 * @param {BuildControlsProps} props 
 * @returns 
 */
const BuildControls = props => (
    <div className={styles.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(control => (
            <BuildControl
                key={control.label}
                label={control.label}
                added={() => props.ingredientAdded(control.type)}
                removed={() => props.ingredientRemoved(control.type)}
                isDisabled={props.disabled[control.type]} />
        ))}
    </div>
);

export default BuildControls;