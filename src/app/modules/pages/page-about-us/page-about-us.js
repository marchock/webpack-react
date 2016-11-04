//css
require('./page-about-us.css');

import React, { Component } from 'react';

export default class PageAbout extends Component {

    render() {
        return (
            <section>
                <div className="grid">
                    <div className="col-1-1">
                        <h1>About us</h1>
                    </div>
                </div>
            </section>
        );
    }
};