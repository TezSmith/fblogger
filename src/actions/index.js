import { LOGIN_ACTION, REGISTER_ACTION, LOGOUT_ACTION } from './types'
import jwtDecode from 'jwt-decode'

//Register Action
export function register(data) {
  return dispatch => {
    console.log("I'm in the register action:", data)
  }
}

//Login Function
export function login(data) {
  return dispatch => {
fetch('http://localhost:3000/tokens', {
  method: 'POST',
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify(data)
}).then(res => res.json())
  .then(res => {
      // Sets the token in local storage
      window.localStorage.setItem('jwt', res.jwt)

      let jwt = window.localStorage.getItem('jwt')
      let result = jwtDecode(jwt)

      // In the next then, push user to the next page in your app.
      // Also you'll need to decode the JWT token in order to get the user data has
      // For that npm install jwt-decode
      // Then you'll need to dispatch an action that updates your user key in the initial store

      dispatch({type: LOGIN_ACTION, payload: {id: result.id, first_name: result.first_name} })
  })
 }
}

//Sample Logout Function
// export function logout(){
//  return dispatch => { dispatch({type: LOGOUT_ACTION}) }
// }
