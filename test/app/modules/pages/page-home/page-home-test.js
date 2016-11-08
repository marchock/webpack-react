
import { renderComponent, expect } from '../../../../test_helper';
import PageHome from '../../../../../src/app/modules/pages/page-home/page-home';
import PageHomeReducer from '../../../../../src/app/modules/pages/page-home/page-home-reducer';
import * as Actions from '../../../../../src/app/modules/pages/page-home/page-home-actions';
import { INCREMENT, DECREMENT } from '../../../../../src/app/modules/pages/page-home/page-home-types';

// Use 'describe' to group together similar tests
describe('Page Home', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(PageHome);
    });

    it('shows home page', () => {
        expect(component.hasClass('.page-home')).to.exist;
    });

    describe('Reducer', () => {
        it('should return the initial state', () => {
            expect(PageHomeReducer(undefined, {})).to.eql({counter: 0});
        });

        it('handles action of type INCREMENT', () => {
            const action = { type: INCREMENT, payload: 1 };
            expect(PageHomeReducer([], action)).to.eql({counter: 1});
        });

        it('handles action of type DECREMENT', () => {
            const action = { type: DECREMENT, payload: 1 };
            expect(PageHomeReducer([], action)).to.eql({counter: 1});
        });
    });


    describe('Actions', () => {
        describe('INCREMENT', () => {
            it('has the correct type', () => {
                const action = Actions.increment(0);
                expect(action.type).to.equal(INCREMENT);
            });

            it('has the correct payload', () => {
                const action = Actions.increment(1);
                expect(action.payload).to.equal(2);
            });
        });
    });
});
