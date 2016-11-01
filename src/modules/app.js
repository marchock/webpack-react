var __svg__ = { path: '../assets/svg/*.svg', name: './svg/sprite.svg' };

// CSS
require('../assets/css/styles.css');


// JS
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';

// Pages
import Base from './page/_base/base.js';
import BaseStore from './page/_base/store.js';
import Home from './page/_home/home.js';
import Product from './page/_product/product.js';
import AboutUs from './page/_about-us/about-us.js';
import Grid from './page/_grid/grid.js';
import Video from './page/_video/video.js';
import Unknown from './page/_unknown/unknown.js';

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
