import { CHANGE_COLOR } from './page-product-types'

export function changeColor(string) {
    return function(dispatch) {
        let color = {color: string};
        // dispatch the data to the reducer
        dispatch({
            type: CHANGE_COLOR,
            payload: color
        });
    }
}
