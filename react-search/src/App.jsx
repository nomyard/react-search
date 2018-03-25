import React, { Component } from 'react';
import Search from './Search.jsx';
import data from './assets/data';
import List from './components/list'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      textInput: '',
      list: data
    }

    const { list } = this.state;
  }

  handleChange = (event) => {
    event.preventDefault();

    this.setState({ textInput: event.target.value });

    // const filtered = this.state.list.filter(word => {
    //   return word.indexOf(this.state.textInput) !== -1;
    // })
  }

  

    getFilteredArray = (str, list ) => {
    return list.filter(word => {
      return word.toLowerCase().indexOf(str.toLowerCase()) !== -1;
    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1> Reactive-Search!</h1>
          <h5> Have some fun with real-time searching! </h5>
          
        </header>

          <Search onChange={this.handleChange} text={this.state.textInput} />
          <List data={this.getFilteredArray(this.state.textInput, this.state.list)} text={this.state.textInput} />


      </div>
    );
  }
}

export default App;
