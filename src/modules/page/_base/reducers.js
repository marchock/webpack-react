
// Combine all reducers into one file

import { combineReducers } from 'redux';
// import { reducer as FormReducer } from 'redux-form';
import HomeReducer from '../_home/home-reducer';
import ProductReducer from '../_product/product-reducer';
import VideoReducer from '../_video/video-reducer';


const rootReducer = combineReducers({
    home: HomeReducer,
    product: ProductReducer,
    video: VideoReducer
});

export default rootReducer;