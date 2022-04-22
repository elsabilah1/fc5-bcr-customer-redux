import { combineReducers } from 'redux';
import btnReducer from './btnReducer';
import carReducer from './carReducer';

export default combineReducers({
    car: carReducer,
    btn: btnReducer,
});
