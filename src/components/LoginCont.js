import React, {Component} from 'react'
import LoginForm from './LoginForm'

class LoginCont extends Component {

  submit = values => {
    console.log(values)
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

export default LoginCont
