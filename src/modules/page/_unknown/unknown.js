import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Unknown extends Component {

    render() {
        return (
            <div>
                <h1>Unknown page !!!!!!!</h1>
                <Link to="/"> Go home </Link>
            </div>
        );
    }
};