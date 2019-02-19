import React, {Component} from 'react'
import {connect} from 'react-redux'
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'
import { login } from '../actions/index'

class AccountCont extends Component {

  submit = values => {
    this.props.login(values)
  }

  render() {

      console.log("These are the props in the account container", this.props)
    return (
       <div>
         <h3>Welcome to Flatiron Blogger!</h3>
         this.state.showLoggedIn ? <LoginForm onSubmit={this.submit}/> : <RegistrationForm onSubmit={this.submit}/>
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

export default connect(mapStateToProps, { login })(AccountCont)
