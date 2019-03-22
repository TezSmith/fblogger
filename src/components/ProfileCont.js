import React, {Component} from 'react'
import {connect} from 'react-redux'
import Callback from './Callback'
import Profile from './Profile'
import { Switch, Route, withRouter } from 'react-router-dom'

// import { login, toggleLogin, register } from '../actions/index'

class ProfileCont extends Component {

  // submit = values => {
  //   this.props.showLogin === true ? this.props.login(values) : this.props.register(values)
  // }
  //
  // handleClick = () => {
  //   this.props.toggleLogin()
  // }

  render() {

    return (
       <div>
           {this.props.user !== '' ? <Route path="/profile" component={Profile}/> : <Route path="/callback" component={Callback}/>}
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
export default withRouter(connect(mapStateToProps)(ProfileCont))
