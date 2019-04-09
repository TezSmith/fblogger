import React, { Component } from 'react';
import AccountCont from './components/AccountCont'
import Callback from './components/Callback'
import Profile from './components/Profile'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
             <p>Testing</p>
             <AccountCont/>
             <Route path="/callback" component={Callback}/>
             <Route path="/profile" component={Profile}/>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showLogin: state.initial.showLogin,
    user: state.initial.user
  }
}

export default withRouter(connect(mapStateToProps)(App));
