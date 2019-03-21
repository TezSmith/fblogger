import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { gLogin, gFail } from '../actions/index'
import GitHubLogin from 'react-github-login'

const LoginForm = (props) => {

  const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID

  const { handleSubmit } = props

  return (
    <div className="formCont">
     <form onSubmit={handleSubmit}>

      <Field name="email" component="input" type="email" placeholder="email"/>
        <br/>
        <br/>
       <Field name="password" component="input" type="text" placeholder="password"/>
       <br/>
       <br/>
       <button type="submit">Submit</button>
     </form>
       <br/>
      <GitHubLogin clientId={CLIENT_ID}
     onSuccess={(code) => { gLogin(code, props.dispatch) } }
     onFailure={gFail} redirectUri="http://localhost:3001/callback"/>
     <br/>
     <br/>
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

export default connect(mapStateToProps, null)((reduxForm({form: 'loginform'}))(LoginForm))
