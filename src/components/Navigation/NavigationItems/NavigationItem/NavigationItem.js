import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationItem.module.css';

/**
 * @typedef {Object} NavigationItemProps
 * @property {string} link
 * @property {boolean} exact
 */

/**
 * @param {NavigationItemProps} props
 * @returns 
 */
const NavigationItem = props => (
    <li className={styles.NavigationItem}>
        <NavLink
            to={props.link}
            activeClassName={styles.active}
            exact={props.exact}>
            {props.children}
        </NavLink>
    </li>
);

export default NavigationItem;
