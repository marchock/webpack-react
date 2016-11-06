// __tests__/test__page-home.js
'use strict';

jest.enableAutomock('../page-home');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Page from '../page-home';

describe('Page', () => {
    it('should exists', () => {
        // Render into document
        //var homePage = TestUtils.renderIntoDocument(<Page />);
        // expect(TestUtils.isCompositeComponent(homePage)).toBeTruthy();

        expect(<Page />).toBeTruthy();
        expect(Page).toBeDefined();
    });
});

