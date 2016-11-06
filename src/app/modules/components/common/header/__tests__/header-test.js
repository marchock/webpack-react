// __tests__/header-test.js
'use strict';

jest.enableAutomock('../header');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Header from '../header';

describe('Header', () => {
    it('should exists', function() {
        // Render into document
        var header = TestUtils.renderIntoDocument(<Header />);
        expect(TestUtils.isCompositeComponent(header)).toBeTruthy();
    });
});