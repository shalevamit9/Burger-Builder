import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import styles from './Toolbar.module.css';

/**
 * @typedef {Object} ToolbarProps
 * @property {() =>void} drawerToggleClicked
 */

/**
 * @param {ToolbarProps} props 
 * @returns 
 */
const Toolbar = props => (
    <header className={styles.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={styles.Logo}>
            <Logo />
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;
