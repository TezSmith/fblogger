import { LOGIN_ACTION, LOGOUT_ACTION } from '/types'

//Sample Login Function
export function login(data) {
  return dispatch => {
fetch('http://localhost:3000/sign_up',
  method: 'POST',
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify(data))
  .then(res => res.json())
  .then(res => {
      dispatch(type: LOGIN_ACTION, payload: {id: res.id, username: res.username}}
  })
}
//Sample Logout Function
export function logout(){
 return dispatch => {
   dispatch(type: LOGOUT_ACTION)
 }
}
