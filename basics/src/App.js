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

  switchNameHandler = (newName)=> {
    let tempState = this.state.Persons;
    tempState[1].name = newName;
    this.setState(tempState)
  }

  nameChangedHandler = (event) => {
    let tempState = this.state.Persons;
    tempState[1].name = event.target.value;
    this.setState(tempState)
  }
  render() {
    return (
      <div className="App">
        <h1>Hi I am a react app</h1>
        <button onClick={this.switchNameHandler.bind(this,'Prerana KR')} style={{border:'2px solid purple',backgroundColor:'skyblue' }}>Switch Name</button>
        <Person age={this.state.Persons[0].age} name={this.state.Persons[0].name} 
          click={this.switchNameHandler.bind(this,'poo')}
          change = {this.nameChangedHandler}
        >My Sex is Male </Person>
        <Person age={this.state.Persons[1].age} name={this.state.Persons[1].name}  change = {this.nameChangedHandler}/>

      </div>
    );
  }

}

export default App;
