import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/persons';

import Cockpit from '../Cockpit/Cockpit';
import AuthContext from '../context/auth-context';
class App extends Component {
  constructor(props){
    super(props);
    console.log('app js constructor');
    
  }

  state={
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    authenticated:false
  }

  static getDerivedStateFromProps(props, state) {
   console.log('app js getDerivedStateFromProps',props);
    return state;
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  loginhandler=()=> {
    this.setState({
      authenticated : !this.state.authenticated
    })
  }

  render () {
    console.log(`app js render method`)
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}/>
        </div>
      );

      
    }



    return (
      <div className={classes.App}>
        <AuthContext.Provider value={{
          authenticated : this.state.authenticated,
          login:this.loginhandler
        }}>
        <Cockpit 
        name={this.props.name}
        showPersons={this.state.showPersons} 
        persons={this.state.persons} 
        clicked={this.togglePersonsHandler}
        login={this.loginhandler}
        />
        {persons}
        </AuthContext.Provider>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
