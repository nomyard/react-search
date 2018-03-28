import React, { Component } from "react";
import Search from "./Search.jsx";
import data from "./assets/data";
import List from "./components/list";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
      list: data
    };
  }

  handleChange = event => {
    event.preventDefault();

    this.setState({ textInput: event.target.value });
  };

  getFilteredArray = (str, list) => {
    return list.filter(word => {
      return word.toLowerCase().indexOf(str.toLowerCase()) !== -1;
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Search-a-mon!</h1>
          <h3> Real time search using the original 151 Pokémon™ </h3>
        </header>

        <Search onChange={this.handleChange} text={this.state.textInput} />
        <List
          data={this.getFilteredArray(this.state.textInput, this.state.list)}
          text={this.state.textInput}
        />
      </div>
    );
  }
}

export default App;
