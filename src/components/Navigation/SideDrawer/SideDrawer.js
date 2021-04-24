import React from 'react';
import Aux from '../../../hoc/Auxiliary';

import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';

/**
 * @typedef {Object} SideDrawerProps
 * @property {() => void} closed
 * @property {boolean} show
 */

/**
 * @param {SideDrawerProps} props 
 * @returns 
 */
const SideDrawer = props => {
    const attachedClasses = [styles.SideDrawer, props.show ? styles.Open : styles.Close].join(' ');

    return (
        <Aux>
            <Backdrop
                clicked={props.closed}
                show={props.show} />
            <div className={attachedClasses}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default SideDrawer;
