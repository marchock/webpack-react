import React, { Component } from 'react';
import Header from '../../component/common/header/header';
import Footer from '../../component/common/footer/footer';

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