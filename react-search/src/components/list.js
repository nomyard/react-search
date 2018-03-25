import React, { Component } from 'react';


class List extends Component {
  
  
  render() {
    return(
      <div>
        <ul>
        {this.props.data.map((name, i) => {
          return <li key={i}> { name.toLowerCase() }  </li>
    })}
      </ul>
      </div>
    );
  }
}







export default List;