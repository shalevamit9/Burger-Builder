import React from 'react';

import styles from './Button.module.css';

/**
 * @typedef {Object} ButtonProps
 * @property {() => void} clicked
 * @property {string} btnType The type of the button, which can be 'Success' or 'Danger', to associate with the css classes names
 */

/**
 * @param {ButtonProps} props 
 * @returns Styled YES/NO button
 */
const Button = props => (
    <button
        className={[styles.Button, styles[props.btnType]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </button>
);

export default Button;
