import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import initialReducer from './initial'

const rootReducer = combineReducers({
   initial: initialReducer,
   form: formReducer
})

export default rootReducer
