import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'


const Profile = (props) => {

    const { person } = props

  return (
    <div>
       <h3>{person}</h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.initial.user,
    person: state.initial.person
  }
}

export default withRouter(connect(mapStateToProps)(Profile))
