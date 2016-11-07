
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
//http://www.thereformedprogrammer.net/unit-testing-react-components-that-use-redux/
//http://redux.js.org/docs/recipes/WritingTests.html
//https://facebook.github.io/react/docs/test-utils.html



// __tests__/test__page-home.js
'use strict';

jest.enableAutomock('../page-home');

import React from 'react';
import { Provider } from 'react-redux';
import BaseStore from '../../../../base/store.js';
const store = BaseStore();


import TestUtils from 'react-addons-test-utils';
import Home from '../page-home';
import { INCREMENT, DECREMENT } from '../page-home-types';
import { mount } from 'enzyme';


import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as Actions from '../page-home-actions';


// import nock from 'nock'
// import expect from 'expect' // You can use any testing library

// const middlewares = [ thunk ]
// const mockStore = configureMockStore(middlewares)
// const store = mockStore({ home: [] })



// DUMB OBJECTS
// describe('Page', () => {
//     it('should exists', () => {
//         // Render into document
//         //var homePage = TestUtils.renderIntoDocument(<Page />);
//         // expect(TestUtils.isCompositeComponent(homePage)).toBeTruthy();

//         expect(<Page />).toBeTruthy();
//         expect(Page).toBeDefined();
//     });
// });


// SMART OBJECTS
describe('mount', () => {
    it('InnerConnectConnected, with connect', () => {

        const wrapper = mount(<Provider store={store}>
            <Home />
        </Provider>);


        // console.log(wrapper.find('button').simulate('click'))
        // console.log(wrapper.find('.increment-btn'))
        // //wrapper.find('.increment-btn')[0].simulate('click');


        // wrapper.find('button').simulate('click')
        // expect(wrapper.find('button').to.have.property('callCount', 1));



        //expect(wrapper.find('increment-btn')).to.equal(true);


        // expect(wrapper.find('section').hasClass('page-home')).toBe(true)






        expect(wrapper.find('section').length).toBe(1);
        // expect(wrapper.find('h2').text())
        //     .toBe('Inner.dispatch defined');
    });
})


// NOT WORKING
// **********************************************************
// ACTIONS
// **********************************************************
// describe('async actions', () => {

//   it('creates INCREMENT Number by one', () => {
//     // nock('http://example.com/')
//     //   .get('/todos')
//     //   .reply(200, { body: { todos: ['do something'] }})

//     const expectedActions = [
//         {
//             type: INCREMENT,
//             payload: 1
//         }
//     ]

//     // //const store = mockStore({ home: [] })


//     console.log('Actions', Actions.increment(1))
//     console.log('store.dispatch', store.dispatch(Actions.increment))




//     expect(store.dispatch(Actions.increment())).toEqual(Actions.increment())
//     // console.log('Actions', Actions)

//     // return store.dispatch(Actions)
//     //     .then(() => { // return of async actions
//     //         expect(store.getActions()).toEqual(expectedActions)
//     //     })
//   })
// })


// **********************************************************
// REDUCERS
// **********************************************************
import reducer from '../page-home-reducer';


describe('Home reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        )
        .toEqual({
            counter: 0
        })
    })

    it('should handle INCREMENT', () => {
        expect(
            reducer(undefined, {
                type: INCREMENT,
                payload: 1
            })
        )
        .toEqual({
            counter: 1
        })
    })

    it('should handle DECREMENT', () => {
        expect(
            reducer(undefined, {
                type: DECREMENT,
                payload: 1
            })
        )
        .toEqual({
            counter: 1
        })
    })
})

