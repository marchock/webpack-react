import { GET_DATA } from './video-types'
import axios from 'axios'

export function getData(string) {
    return function(dispatch) {
        let color = {color: string};
        // dispatch the data to the reducer


        axios.get('https://jsonplaceholder.typicode.com/posts/1')
          .then(function (response) {
            console.log(response);

            dispatch({
                type: GET_DATA,
                payload: response.data.body
            });



          })
          .catch(function (error) {
            console.log(error);
          });

    }
}
