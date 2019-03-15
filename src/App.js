import React, { Component } from 'react';
import AccountCont from './components/AccountCont'
import Callback from './components/Callback'
import { Route } from 'react-router-dom'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
             <AccountCont/>
             <Route path="/callback" component={Callback}/>
        </header>
      </div>
    );
  }
}

export default App;
