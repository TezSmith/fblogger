import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Callback = () => (
  <div className="container">
    <h4>Loading...</h4>
  </div>
);

export default withRouter(connect(null)(Callback))
