import * as type from '../actions/types'

const initialState = {
  showLogin: true,
<<<<<<< HEAD
  user: {id: 0, first_name: ""},
  person: {}
=======
  user: {}
>>>>>>> 651aaa0b6daef1850c85c5c59f0f835df30911a7
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
