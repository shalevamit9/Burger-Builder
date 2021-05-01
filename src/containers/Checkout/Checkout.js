import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: {},
        price: 0
    }

    componentDidMount() {
        const { search } = this.props.location;
        const queryParams = new URLSearchParams(search);

        const ingredients = {};
        let price = 0;
        for (const [key, value] of queryParams.entries()) {
            if (key === 'price') {
                price = value;
            } else {
                ingredients[key] = parseInt(value);
            }
        }

        this.setState({ ingredients, price });
    }

    handleCheckoutCanceled = () => {
        this.props.history.goBack();
    }

    handleCheckoutContinued = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCanceled={this.handleCheckoutCanceled}
                    checkoutContinued={this.handleCheckoutContinued} />
                <Route
                    path={`${this.props.match.url}/contact-data`}
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />)} />
            </div>
        )
    }
}

export default Checkout;
