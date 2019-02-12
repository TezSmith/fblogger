import * as type from '../actions/types'

const initialState = {
  loggedIn: false,
  user: {}
}

const initialReducer = (state = initialState, action) => {
 switch(action.type) {
   case type.LOGIN_ACTION:
     return {   ...state, user: action.payload, loggedIn: true   }
   case type.LOGOUT_ACTION:
     return initialState
   default:
     return state
 }
}

export default initialReducer
