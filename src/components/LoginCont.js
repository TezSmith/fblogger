import React, {Component} from 'react'
import {connect} from 'react-redux'
import LoginForm from './LoginForm'
import { login } from '../actions/index'

class LoginCont extends Component {

  submit = values => {
    this.props.login(values)
  }

  render() {
      console.log(this.props.user)
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
    showLogin: state.initial.showLogin,
    user: state.initial.user
  }
}

export default connect(mapStateToProps, { login })(LoginCont)
