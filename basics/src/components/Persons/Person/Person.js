import React ,{Fragment}from 'react';
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Auxillary';
import classes from './Person.css';

class person extends React.Component {
    render() {
        console.log(`person js render`)
        return (
            <Aux >
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        )
    }

};

export default withClass(person,classes.Person);