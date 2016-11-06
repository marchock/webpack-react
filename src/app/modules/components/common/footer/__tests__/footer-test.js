// __tests__/footer-test.js
'use strict';

jest.enableAutomock('../footer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Footer from '../footer';

describe('Footer', () => {
    it('should exists', function() {
        // Render into document
        var footer = TestUtils.renderIntoDocument(<Footer />);
        expect(TestUtils.isCompositeComponent(footer)).toBeTruthy();
    });
});