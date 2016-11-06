// __tests__/nav-test.js
'use strict';

jest.enableAutomock('../nav');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Nav from '../nav';

describe('Nav', () => {
    it('should exists', function() {
        // Render into document
        var nav = TestUtils.renderIntoDocument(<Nav />);
        expect(TestUtils.isCompositeComponent(nav)).toBeTruthy();
    });
});