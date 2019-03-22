import { TOGGLE_LOGIN, LOGIN_ACTION, REGISTER_ACTION } from './types'
import jwtDecode from 'jwt-decode'

// const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID
// const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL


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

export function loadingUser(person){
    return dispatch => {
      dispatch({type: LOGIN_ACTION, payload: person})
  }
}

export const getPerson = (code) => {
  return fetch('http://localhost:3000/auth/github/callback', {
    headers: new Headers({ "Content-Type": "application/json; charset=utf-8", "code":`${code.code}` }),
    method: 'GET'
  })
  .then(res => res.json())

//Github Login
export function gLogin(code){
  console.log("This is the code: ", code)
  let person = getPerson(code)
  console.log("Who I am", person)
  return dispatch => {
    dispatch(updateStore(person))
  }
}

//Github Login
export async function gLogin(code, dispatch){
  let person = await getPerson(code)
  console.log("Yo: ", person)
  dispatch({type: LOGIN_ACTION, payload: person})
}

 // console.log("Hit Login Function", code)
 //   return dispatch => {
 //     dispatch(loadingUser())
 //    fetch('http://localhost:3000/auth/github/callback', {
 //      headers: new Headers({ "Content-Type": "application/json; charset=utf-8", "code":`${code.code}` }),
 //      method: 'GET'
 //    }).then(res => res.json())
 //    .then(res => {
 //      console.log("I'm in the response.")
 //      dispatch({type: UPDATE_PERSON, payload: res})
 //    })

  // person.name  // Actual name
  // person.login // Username
  // person.avatar // Photo
  // person.html_ul // GitHubLink



export const gFail = (res) => {
  console.log("Github Login Failed Because... ", res)
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
