import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import styles from './Layout.module.css';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    handleSideDrawerClosed = () => {
        this.setState({ showSideDrawer: false });
    }

    handleSideDrawerToggle = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.handleSideDrawerToggle} />
                <SideDrawer
                    closed={this.handleSideDrawerClosed}
                    show={this.state.showSideDrawer} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;
