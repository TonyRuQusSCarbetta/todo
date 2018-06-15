import React, { Component } from 'react';
import './App.css';

class List extends Component {
  // constructor(props){
  //   super(props)
  //     this.state={
  //       userInput: '',
  //       submittedUserInput: []
  //     }
  // }

  render() {
    return (
      <ul>
        {this.props.submittedUserInput.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    );
  }
}

export default List;
