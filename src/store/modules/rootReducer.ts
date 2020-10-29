import { combineReducers } from 'redux';
import auth from './auth/reducers';
import company from './company/reducers';

export default combineReducers({
    company,
    auth
});