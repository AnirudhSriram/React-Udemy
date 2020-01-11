import React from 'react';
import './App.css';
import Person from './Person/Person';
class App extends React.Component {
  state = {
    Persons: [
      {
        name: 'Anirudh',
        age: 24
      },
      {
        name: 'Prerana',
        age: 23
      }
    ]
  }

  switchNameHandler = ()=> {
    console.log('was clicked')
  }
  render() {
    return (
      <div className="App">
        <h1>Hi I am a react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person age={this.state.Persons[0].age} name={this.state.Persons[0].name}>My Sex is Male </Person>
        <Person age={this.state.Persons[1].age} name={this.state.Persons[1].name} />

      </div>
    );
  }

}

export default App;
