import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

const LoginForm = (props) => {


  const { handleSubmit } = props

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
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    showLogin: state.initial.showLogin,
    user: state.initial.user
  }
}

export default connect(mapStateToProps)((reduxForm({form: 'loginform'}))(LoginForm))
