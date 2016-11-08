import { INCREMENT, DECREMENT } from './page-home-types'

export function increment(num) {
    num += 1;

    return {
        type: INCREMENT,
        payload: num
    }
}

export function decrement(num) {
    num -= 1;

    return {
        type: INCREMENT,
        payload: num
    }
}