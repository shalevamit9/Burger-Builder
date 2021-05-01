import React, { Component } from "react";

import Order from '../../components/Order/Order';
import axiosOrdersInstance from '../../axios-orders';
import { Order as OrderType } from '../BurgerBuilder/BurgerBuilder';
import { AxiosResponse } from 'axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    async componentDidMount() {
        try {
            const response = await axiosOrdersInstance.get('orders.json');
            const { data } = response;
            console.log(data);

            const orders = [];
            for (const key in data) {
                orders.push({ ...data[key], id: key });
            }

            this.setState({ loading: false, orders });
        } catch (error) {
            this.setState({ loading: false });
        }
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axiosOrdersInstance);
