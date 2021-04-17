import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

/**
 * @typedef {Object} ModalProps
 * @property {boolean} show
 * @property {() => void} modalClosed
 */

/**
 * @param {ModalProps} props 
 * @returns 
 */
const Modal = props => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className={[styles.Modal, props.show ? styles.In : styles.Out].join(' ')}>
            {props.children}
        </div>
    </Aux>
);

export default Modal;
