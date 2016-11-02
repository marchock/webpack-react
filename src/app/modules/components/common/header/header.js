// CSS
require('./header.css');

import React, { Component } from 'react';
import Nav from './nav/nav';

export default class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className="grid">
                    <div className="col-1-1">
                        <h1>{this.props.titleMessage}</h1>
                        <Nav />
                    </div>
                </div>
            </header>
        );
    }
}