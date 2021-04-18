import React from 'react';

import styles from './NavigationItem.module.css';

/**
 * @typedef {Object} NavigationItemProps
 * @property {string} link
 * @property {boolean} isActive
 */

/**
 * @param {NavigationItemProps} props
 * @returns 
 */
const NavigationItem = props => (
    <li className={styles.NavigationItem}>
        <a
            href={props.link}
            className={props.isActive ? styles.active : null}>
            {props.children}
        </a>
    </li>
);

export default NavigationItem;
