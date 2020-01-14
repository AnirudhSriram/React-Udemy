import React from 'react';
import './App.css';
import Person from './Person/Person';
class App extends React.Component {
  state = {
    Persons: [
      {
        id:0,
        name: 'Terrorbladezz',
        age: 24
      },
      {
        id:1,
        name: 'Anti mage',
        age: 23
      },
      {
        id:2,
        name: 'Templar assasin',
        age: 23
      }
    ],
    showPersons: true
  }

  deletePerson = (index) => {
    console.log(index);
    const persons = [...this.state.Persons]
    persons.splice(index,1);
    this.setState({Persons:persons});
  }

  nameChangedHandler = (event,id) => {
    const Persons = [...this.state.Persons];
    let temp=  Persons[id];
    temp.name = event.target.value;
    Persons[id] = temp;
    this.setState({Persons:Persons});
    // this.setState({Persons : persons})
  }

  togglePersons = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }
  
  render() {
    const buttonStyles={
      border: '1px solid transparent',
      color:'white',
      padding:'15px',
      backgroundColor:'green',
      fontSize: '16px',
      borderRadius:'5px',
      ':hover' : {
        backgroundColor:'lightgreen',
        color:'black'
      }
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = <div>
        {this.state.Persons.map((person,index) => <Person key={person.id} age={person.age} name={person.name} change={(event)=>this.nameChangedHandler(event,person.id)} click={()=>this.deletePerson(index)} /> )}
      </div>
      buttonStyles.backgroundColor = 'red';
      buttonStyles[':hover'] = {
        backgroundColor:'salmon',
        color:'black'
      }
    }

    let classes = [];
    if(this.state.Persons.length<=2){
      classes.push('red');
    }
    if(this.state.Persons.length <=1){
      classes.push('bold');
    }
    
    
    return (
      <StyleRoot>
      <div className="App">
        <p className={classes.join(' ')}>This works</p>
        {this.state.showPersons ? persons: <p>Click on toggle to view Persons</p>}
        <button onClick={this.togglePersons} style={buttonStyles}>Toggle Persons</button>
      </div>
      </StyleRoot>
    );
  }

}

export default App;
