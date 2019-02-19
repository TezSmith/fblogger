import * as type from '../actions/types'

const initialState = {
  showLogin: true,
  user: {id: 0, first_name: ""}
}

const initialReducer = (state = initialState, action) => {
 switch(action.type) {
   case type.REGISTER_ACTION:
    return {...state, user: action.payload, showLogin: false}
   case type.LOGIN_ACTION:
     return {   ...state, user: action.payload, showLogin: false   }
   case type.LOGOUT_ACTION:
     return initialState
   default:
     return state
 }
}

export default initialReducer
