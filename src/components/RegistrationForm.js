import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { SelectField } from 'react-semantic-redux-form';

const RegistrationForm = (props) => {

  const communityMember = [
    {
      text: 'student',
      value: 'Student'
    },
    {
      text: 'instructor',
      value: 'Instructor'
    }
  ]


  const { handleSubmit, handleClick } = props

  return (
    <div className="formCont">
     <form onSubmit={handleSubmit}>
       <div>
         <label htmlFor="first_name">First Name</label><br/>
         <Field name="first_name" component="input" type="text" />
       </div>
       <div>
         <label htmlFor="last_name">Last Name</label><br/>
         <Field name="last_name" component="input" type="text" />
       </div>
       <div>
         <label htmlFor="password">Password</label><br/>
         <Field name="password" component="input" type="text" />
       </div>
       <div>
         <label htmlFor="password_confirmation">Confirm Password</label><br/>
         <Field name="password_confirmation" component="input" type="text" />
       </div>
       <div>
         <label htmlFor="email">Email</label><br/>
         <Field name="email" component="input" type="email" />
       </div>
       <div>
       <label htmlFor="email">I am a:</label><br/>
       <Field name="type" component={SelectField} options={communityMember} />

       </div>
       <button type="submit">Submit</button>
     </form>
     <button onClick={handleClick}>I already have an account.</button>
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.initial.loggedIn,
    user: state.initial.user
  }
}

export default connect(mapStateToProps)((reduxForm({form: 'registrationform'}))(RegistrationForm))
