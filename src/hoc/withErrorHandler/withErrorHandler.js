import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        // clean up the error object when sending a request
        requestInterceptor = axios.interceptors.request.use(request => {
            this.setState({ error: null });
            return request;
        });

        // when getting an error from http response set the state with the received error
        responseInterceptor = axios.interceptors.response.use(response => response, error => {
            this.setState({ error: error });
        });


        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        handlerErrorClose = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error}
                        modalClosed={this.handlerErrorClose}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
};

export default withErrorHandler;
