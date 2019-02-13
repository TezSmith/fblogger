import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

const LoginForm = (props) => {

  const { handleSubmit } = props

  return (
    <div className="formCont">
     <form onSubmit={handleSubmit}>
       <div>
         <label htmlFor="firstName">First Name</label><br/>
         <Field name="firstName" component="input" type="text" />
       </div>
       <div>
         <label htmlFor="lastName">Last Name</label><br/>
         <Field name="lastName" component="input" type="text" />
       </div>
       <div>
         <label htmlFor="email">Email</label><br/>
         <Field name="email" component="input" type="email" />
       </div>
       <button type="submit">Submit</button>
     </form>
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.initial.loggedIn,
    user: state.initial.user
  }
}

export default connect(mapStateToProps)((reduxForm({form: 'loginform'}))(LoginForm))
