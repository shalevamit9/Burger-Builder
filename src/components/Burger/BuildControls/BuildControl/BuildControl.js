import React from 'react';

import styles from './BuildControl.module.css';

/**
 * @typedef {Object} BuildControlProps
 * @property {string} label The label for the build control
 * @property {() => (type: string) => void} added Method to execute upon More button click
 * @property {() => (type: string) => void} removed Method to execute upon Less button click
 * @property {boolean} isDisabled Is the less button disabled or not
 */

/**
 * 
 * @param {BuildControlProps} props 
 * @returns 
 */
const BuildControl = props => (
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{props.label}</div>
        <button
            className={styles.Less}
            onClick={props.removed}
            disabled={props.isDisabled}>
            Less
        </button>
        <button
            className={styles.More}
            onClick={props.added}>
            More
        </button>
    </div>
);

export default BuildControl;