import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import axiosOrdersInstance from '../../axios-orders';
import Spinner from '../../components/UI/Modal/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import { Ingredients } from '../../components/Burger/Burger';

/**
 * @typedef {Object} Address
 * @property {string} street
 * @property {string} zipCode
 * @property {string} country
 */

/**
 * @typedef {Object} Customer
 * @property {string} deliveryMethod
 * @property {string} name 
 * @property {string} email 
 * @property {Address} address 
 */

/**
 * @typedef {Object} Order
 * @property {Ingredients} ingredients
 * @property {number} price
 * @property {Customer} customer
 */

const INGREDIENTS_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    };

    handlePurchase = () => {
        this.setState({ purchasing: true });
    }

    handlePurchaseCancel = () => {
        this.setState({ purchasing: false });
    }

    handlePurchaseContinue = async () => {
        this.setState({ loading: true });

        /** @type {Order} */
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
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
        }
    }

    /**
     * A helper method to update the order button state from disabled to enabled and reversed
     * @param {Ingredients} ingredients An Ingredients object
     */
    updatePurchaseState = (ingredients) => {
        // const ingredientSum = Object.keys(ingredients)
        //     .map(ingredientKey => ingredients[ingredientKey])
        //     .reduce((sum, element) => sum + element, 0);

        let ingredientSum = 0;
        for (const ingredientKey in ingredients) {
            ingredientSum += ingredients[ingredientKey];
        }

        this.setState({ purchasable: ingredientSum > 0 });
    }

    /**
     * 
     * @param {string} type The type of the ingredient to add
     */
    handleAddIngredient = type => {
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type]++;

        const updatedTotalPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedTotalPrice
        });

        this.updatePurchaseState(updatedIngredients);
    }

    /**
     *
     * @param {string} type The type of the ingredient to remove
     */
    handleRemoveIngredient = type => {
        const oldAmount = this.state.ingredients[type]
        if (oldAmount > 0) {
            const updatedIngredients = { ...this.state.ingredients };
            updatedIngredients[type]--;

            const updatedTotalPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];

            this.setState({
                ingredients: updatedIngredients,
                totalPrice: updatedTotalPrice
            });

            this.updatePurchaseState(updatedIngredients);
        }
    }

    render() {
        // {salad: true|false, meat: true|false, ...}
        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] === 0;
        }

        let orderSummary = <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCanceled={this.handlePurchaseCancel}
            purchaseContinued={this.handlePurchaseContinue}
            price={this.state.totalPrice} />;
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.handlePurchaseCancel}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.handleAddIngredient}
                    ingredientRemoved={this.handleRemoveIngredient}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                    ordered={this.handlePurchase} />
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axiosOrdersInstance);
