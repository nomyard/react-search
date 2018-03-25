import React, { Component } from 'react';


class Search extends Component {
 

  

  render() {
    return (
      <div>
        <h3> Search Here: </h3>
        <input onChange={ this.props.onChange } type="text" value={ this.props.textInput } placeholder="Type here"/>
  


      </div>
    );
  }
}

export default Search;