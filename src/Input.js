import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props){
    super(props)
      this.state={
        userInputValue: '',
        submittedUserInput: []
      }
  }
//retrieves value of input
  onChange = (event) => {
      this.setState({userInputValue: event.target.value});
    }
//clears the input form by changing userInputValue to an empty array, than pushes/adds the new userInputValue to the submittedUserInputValue array
    onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      userInputValue: '',
      submittedUserInput: [...this.state.submittedUserInput, this.state.userInputValue]
      //... a BRACKET with three dots is a spread operator, this returns all the properties of an element,
      //the reason this is returning the new userInputValue instead of the blank one is because of the THIS KEYWORD
    });
  }
  render() {
    return (
      <div>
      <div className="col-md-12 flex-container">
        <h1>To Do List</h1>
      </div>

      <div className="col-md-2 border border-rounded border-dark" >
        <form onSubmit={this.onSubmit}>
          <input
                value={this.state.userInputValue}
                onChange={this.onChange}
                className="form-control"
                placeholder="Enter Task"/>
            <button className="btn btn-primary btn-sm">Submit</button>
        </form>
        <List submittedUserInput={this.state.submittedUserInput}
        className="flex-container" />
      </div>
      </div>
    );
  }
}

export default App;




//https://medium.com/@aghh1504/1-simple-react-todo-list-52186b62976b
