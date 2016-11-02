import { INCREMENT, DECREMENT } from './page-home-types'

export function increment(num) {
    return function(dispatch) {
        num += 1


        // dispatch the data to the reducer
        dispatch({
            type: INCREMENT,
            payload: num
        });
    }
}

export function decrement(num) {
    return function(dispatch) {
        num -= 1

        dispatch({
            type: DECREMENT,
            payload: num
        });
    }
}