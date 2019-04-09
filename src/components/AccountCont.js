import React, {Component} from 'react'
import {connect} from 'react-redux'
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'
import { login, toggleLogin, register } from '../actions/index'

class AccountCont extends Component {


  submit = values => {
    this.props.showLogin === true ? this.props.login(values) : this.props.register(values)
  }

  handleClick = () => {
    this.props.toggleLogin()
  }

  render() {

    return (
       <div>
           <p>Testing</p>
           <h3>Welcome to Flatiron Blogger!</h3>
           {this.props.showLogin ? <LoginForm onSubmit={this.submit} handleClick={this.handleClick}/> : <RegistrationForm onSubmit={this.submit} handleClick={this.handleClick}/>}
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

//add store props and actions to this account container component
export default connect(mapStateToProps, { login, toggleLogin, register })(AccountCont)
