import { TOGGLE_LOGIN, LOGIN_ACTION, REGISTER_ACTION, LOGOUT_ACTION, UPDATE_PERSON } from './types'
import jwtDecode from 'jwt-decode'


//Show Login
export function toggleLogin() {
  return dispatch => {
    dispatch({type: TOGGLE_LOGIN})
  }
}

//Register Action
export function register(data) {
  return dispatch => {
fetch('http://localhost:3000/users', {
  method: 'POST',
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify(data)
}).then(res => res.json())
  .then(res => {
      // Sets the token in local storage
      window.localStorage.setItem('jwt', res.jwt)
      let jwt = window.localStorage.getItem('jwt')
      let result = jwtDecode(jwt)
      console.log("I've registered", result)
      // In the next then, push user to the next page in your app.
      // Also you'll need to decode the JWT token in order to get the user data has
      // For that npm install jwt-decode
      // Then you'll need to dispatch an action that updates your user key in the initial store
      dispatch({type: REGISTER_ACTION, payload: {id: result.id, first_name: result.first_name} })
  })
 }
}

export async function getPerson(code){
  let person = await fetch('http://localhost:3000/auth/github/callback', {
    method: 'GET',
    headers: new Headers({"Content-Type": "application/json", "code":`${code}`})
  })//.then(res => res.json())
  let parsedPerson = await person.json()
  return parsedPerson
}

export function updateStore(person) {
  return {type: UPDATE_PERSON, payload: person}
}

//Github Login
export function gLogin(code){
  console.log("This is the code: ", code)
  let person = getPerson(code)
  console.log("Who I am", person)
  return dispatch => {
    dispatch(updateStore(person))
  }
}


export const gFail = (res) => {
  console.log("this is the github fail" , res)
  toggleLogin()
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
      console.log("I've logged in", result)
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
