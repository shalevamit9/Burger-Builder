import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
        totalPrice: 4
    };

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
        }
    }

    render() {
        // {salad: true|false, meat: true|false, ...}
        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] === 0;
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.handleAddIngredient}
                    ingredientRemoved={this.handleRemoveIngredient}
                    disabled={disabledInfo} price={this.state.totalPrice} />
            </Aux>
        );
    }
}

export default BurgerBuilder;
