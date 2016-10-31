import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Nav extends Component {

    render() {
        return (
            <div>
                <Link to="/">home</Link> / 
                <Link to="/product/1234">products</Link> / 
                <Link to="/about-us">About Us</Link> / 
                <Link to="/grid">Grid</Link>
            </div>
        );
    }
}