import React from 'react';

import styles from './Backdrop.module.css';

/**
 * @typedef {Object} BackdropProps
 * @property {boolean} show
 * @property {() => void} clicked
 */

/**
 * @param {BackdropProps} props 
 * @returns 
 */
const Backdrop = props => (
    props.show ? <div className={styles.Backdrop} onClick={props.clicked}></div> : null
);

export default Backdrop;
