import React, { Component } from 'react';
import Search from './Search.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1> Reactive-Search!</h1>
          <h5> Have some fun with real-time searching! </h5>
          
        </header>

          <Search />

      </div>
    );
  }
}

export default App;
