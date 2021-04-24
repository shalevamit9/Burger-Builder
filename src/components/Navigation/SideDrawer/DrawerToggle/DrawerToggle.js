import React from 'react';

import styles from './DrawerToggle.module.css';

/**
 * @typedef {Object} DrawerToggleProps
 * @property {() => void} clicked
 */

/**
 * @param {DrawerToggleProps} props
 * @returns 
 */
const DrawerToggle = props => (
    <button
        className={styles.DrawerToggle}
        onClick={props.clicked}>
        <div />
        <div />
        <div />
    </button>
);

export default DrawerToggle;