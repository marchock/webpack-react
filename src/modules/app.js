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
import Unknown from './page/_unknown/unknown.js';


const store = BaseStore();


var __svg__ = { path: '../assets/svg/*.svg', name: './svg/sprite.svg' };


console.log('store', store)


const root = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Base} >
                <IndexRoute component={Home} />
                <Route path="about-us" component={AboutUs} />
                <Route path="product/:product" component={Product} />
                <Route path="**" component={Unknown} />
            </Route>
        </Router>
    </Provider>
);


ReactDOM.render(root, document.getElementById('root'));
