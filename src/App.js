import React, { Component } from 'react';
import AccountCont from './components/AccountCont'
import Profile from './components/Profile'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'



import './App.css';

class App extends Component {
  render() {
    const { user } = this.props
    return (
      <div className="App">
        <header className="App-header">
        { this.props.showLogin ? <AccountCont/> : <Route path="/Profile" component={Profile}/> }
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
