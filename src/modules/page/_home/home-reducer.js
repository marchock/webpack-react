import { TEST_ACTION } from './home-types'

const initialState =  {
    exampleData: 6
};

export default function home(state = initialState, action) {

    switch (action.type) {
        case TEST_ACTION:
            console.log('reducer', action);
            return {
                ...state,
                exampleData: action.payload
            };
        default:
            return state;
        }
}
