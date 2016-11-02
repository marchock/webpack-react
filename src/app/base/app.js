
import React, { Component } from 'react';
import Header from '../modules/components/common/header/header';
import Footer from '../modules/components/common/footer/footer';

export default class Base extends Component {

    render() {

        return (
            <div>
                <Header titleMessage="Header message goes here" />
                <router>{this.props.children}</router>
                <Footer footerMessage="footer message goes here" />
            </div>
        );
    }
};