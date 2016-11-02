
// Combine all reducers into one file

import { combineReducers } from 'redux';
// import { reducer as FormReducer } from 'redux-form';
import HomeReducer from '../modules/pages/page-home/page-home-reducer';
import ProductReducer from '../modules/pages/page-product/page-product-reducer';
import VideoReducer from '../modules/pages/page-video/page-video-reducer';


const rootReducer = combineReducers({
    home: HomeReducer,
    product: ProductReducer,
    video: VideoReducer
});

export default rootReducer;