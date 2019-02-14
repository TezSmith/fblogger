import React, {Component} from 'react'
import {connect} from 'react-redux'
import LoginForm from './LoginForm'
import { login } from '../actions/index'

class LoginCont extends Component {

  submit = values => {
    // console.log(values)
    this.props.login()
  }

  render() {
    return (
       <div>
         <h3>Welcome to Flatiron Blogger!</h3>
         <LoginForm onSubmit={this.submit}/>
       </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.initial.loggedIn,
    user: state.initial.user
  }
}

export default connect(mapStateToProps, { login })(LoginCont)
