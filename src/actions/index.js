import { LOGIN_ACTION, LOGOUT_ACTION } from './types'

//Sample Login Function
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
      // In the next then, push user to the next page in your app.
      // Also you'll need to decode the JWT token in order to get the user data has
      // For that npm install jwt-decode
      // Then you'll need to dispatch an action that updates your user key in the initial store

      // dispatch(type: LOGIN_ACTION, payload: {id: res.id, username: res.username}
  })
  .then(() => console.log("You here nah!"))
 }
}

//Sample Logout Function
// export function logout(){
//  return dispatch => { dispatch(type: LOGOUT_ACTION) }
// }
