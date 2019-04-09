import * as type from '../actions/types'

const initialState = {
  showLogin: true,
  user: {}
}

const initialReducer = (state = initialState, action) => {
 switch(action.type) {
   case type.TOGGLE_LOGIN:
    return {...state, showLogin: !state.showLogin}
   case type.REGISTER_ACTION:
    return {...state, user: action.payload}
   case type.LOGIN_ACTION:
     return {...state, user: action.payload}
   case type.UPDATE_PERSON:
     return {...state, person: action.payload}
   case type.LOGOUT_ACTION:
     return initialState
   default:
     return state
 }
}

export default initialReducer
