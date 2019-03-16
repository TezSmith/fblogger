import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { gLogin, gFail } from '../actions/index'
import GitHubLogin from 'react-github-login'
// import SocialButton from './SocialButton'


const LoginForm = (props) => {

  const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID

  const { handleSubmit, handleClick } = props
  return (
    <div className="formCont">
     <form onSubmit={handleSubmit}>
       <div>
         <label htmlFor="email">Email</label><br/>
         <Field name="email" component="input" type="email" />
       </div>
       <div>
       <label htmlFor="password">Password</label><br/>
       <Field name="password" component="input" type="text" />
       </div>
       <button type="submit">Submit</button>
     </form>

      <GitHubLogin clientId={CLIENT_ID}
     onSuccess={gLogin}
     onFailure={gFail} redirectUri="http://localhost:3001/callback"/>

     {/*<button onClick={handleClick}> Register for an account.</button>*/}
    </div>

  )

}

const mapStateToProps = (state) => {
  return {
    showLogin: state.initial.showLogin,
    user: state.initial.user
  }
}

//  <GitHubLogin clientId={CLIENT_ID}
// onSuccess={gLogin}
// onFailure={gFail} redirectUri="http://localhost:3001/callback"/>

// <SocialButton
//      provider='github'
//      appId={CLIENT_ID}
//      onLoginSuccess={gLogin}
//      onLoginFailure={gFail}
         // gatekeeper="http://localhost:3000"
//        redirect="http://localhost:3001/callback"
//    >
//      Login with Github
//    </SocialButton>

export default connect(mapStateToProps, {gLogin})((reduxForm({form: 'loginform'}))(LoginForm))
