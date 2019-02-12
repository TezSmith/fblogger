import { combineReducers } from 'redux';
import initialReducer from './initial'

const rootReducer = combineReducers({
   initial: initialReducer
})

export default rootReducer
