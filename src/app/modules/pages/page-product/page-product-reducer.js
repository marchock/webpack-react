import { CHANGE_COLOR } from './page-product-types'

// Set default values
const initialState =  {
    color: {color: 'red'}
};

export default function home(state = initialState, action) {

    switch (action.type) {
        case CHANGE_COLOR:
            return {
                ...state,
                color: action.payload
            };
        default:
            return state;
        }
}