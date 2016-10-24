import { INCREMENT, DECREMENT } from './home-types'

// Set default values
const initialState =  {
    counter: 0
};

export default function home(state = initialState, action) {

    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: action.payload
            };
        case DECREMENT:
            return {
                ...state,
                counter: action.payload
            };
        default:
            return state;
        }
}
