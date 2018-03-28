import React, { Component } from "react";
import { Input } from "semantic-ui-react";

class Search extends Component {
  render() {
    return (
      <div className="searchBar">
        <h3> Search Here: </h3>
        <Input
          icon="search"
          onChange={this.props.onChange}
          type="text"
          value={this.props.textInput}
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default Search;
