import React, { Component } from "react";

import Button from '../../../components/UI/Button/Button';
import axiosOrdersInstance from '../../../axios-orders';
import { Ingredients } from '../../../components/Burger/Burger';

import styles from './ContactData.module.css';
import Spinner from "../../../components/UI/Modal/Spinner/Spinner";

/**
 * @typedef {Object} ContactDataProps
 * @property {Ingredients} ingredients
 * @property {number} price
 */

/**
 * @extends {Component<ContactDataProps>}
 */
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    /**
     * @param {Event} event 
     */
    handleOrder = async (event) => {
        event.preventDefault();

        this.setState({ loading: true });

        /** @type {Order} */
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Sweet Papuna',
                address: {
                    street: 'Test street 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com',
                deliveryMethod: 'fastest'
            }
        };

        try {
            const response = await axiosOrdersInstance.post('orders.json', order);
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ loading: false, purchasing: false });
            this.props.history.push('/');
        }
    }

    render() {
        let form = (
            <form>
                <input className={styles.Input} type="text" name="name" placeholder="Your name" />
                <input className={styles.Input} type="text" name="email" placeholder="Your email" />
                <input className={styles.Input} type="text" name="street" placeholder="Street" />
                <input className={styles.Input} type="text" name="postal" placeholder="Postal Code" />
                <Button
                    btnType="Success"
                    clicked={this.handleOrder}>
                    ORDER
                </Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={styles.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
