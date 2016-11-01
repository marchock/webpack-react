import { GET_DATA } from './video-types'

// Set default values
const initialState =  {
    feed: 'nothing'
};

export default function home(state = initialState, action) {

    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                feed: action.payload
            };
        default:
            return state;
        }
}