import { TEST_ACTION } from './home-types'

export function testAction(exampleData) {
    return function(dispatch) {

        // Access API
        exampleData = exampleData + 1

        console.log('exampleData', exampleData);

        dispatch({
            type: TEST_ACTION,
            payload: exampleData
        });
    }
}