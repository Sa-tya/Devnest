import {combineReducer} from 'redux';
import placeReducer from './placeReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducer({
    place: placeReducer,
    data: dataReducer
})

export default rootReducer;