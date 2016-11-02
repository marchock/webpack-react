var __svg__ = { path: '../assets/svg/*.svg', name: './svg/sprite.svg' };

// CSS
require('../assets/css/base.css');

// JS
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';

// Base files
import Base from './base/app.js';
import BaseStore from './base/store.js';

// Pages
import Home from './modules/pages/page-home/page-home.js';
import Product from './modules/pages/page-product/page-product.js';
import AboutUs from './modules/pages/page-about-us/page-about-us.js';
import Grid from './modules/pages/page-grid/page-grid.js';
import Video from './modules/pages/page-video/page-video.js';
import Unknown from './modules/pages/page-unknown/page-unknown.js';

const store = BaseStore();

const root = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Base} >
                <IndexRoute component={Home} />
                <Route path="about-us" component={AboutUs} />
                <Route path="grid" component={Grid} />
                <Route path="video" component={Video} />
                <Route path="product/:product" component={Product} />
                <Route path="**" component={Unknown} />
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
