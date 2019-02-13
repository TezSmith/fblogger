import React, { Component } from 'react';
import LoginCont from './components/LoginCont'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
             <LoginCont/>
        </header>
      </div>
    );
  }
}

export default App;
