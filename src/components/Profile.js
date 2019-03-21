import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


const Profile = (props) => {

    const { user } = props

  return (
    <div>
       <h3>{user.first_name}</h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.initial.user
  }
}

export default withRouter(connect(mapStateToProps)(Profile))
