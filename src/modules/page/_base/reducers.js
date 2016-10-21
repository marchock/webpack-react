
// Combine all reducers into one file




import { combineReducers } from 'redux';
// import { reducer as FormReducer } from 'redux-form';
import HomeReducer from '../_home/home-reducer';
// import PageDonationReducer from 'modules/pages/page-donation/page-donation.reducer';

const rootReducer = combineReducers({
    home: HomeReducer
    // stars: PageStarsReducer,
    // donation: PageDonationReducer
});

export default rootReducer;