import React, { Component } from 'react';
import AccountCont from './components/AccountCont'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
             <AccountCont/>
        </header>
      </div>
    );
  }
}

export default App;
