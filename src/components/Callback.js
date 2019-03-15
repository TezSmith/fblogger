import {React, Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Callback extends Component {

  componentDidMount() {
    
  }

 render() {
    return (
      <div>
         <h3>Loading...</h3>
      </div>
    )
 }
}

export default withRouter(connect(null)(Callback))
