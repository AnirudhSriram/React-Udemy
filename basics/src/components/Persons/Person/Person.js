import React from 'react';
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Auxillary';
import classes from './Person.css';
import PropTypes from 'prop-types';

import AuthContext from '../../../context/auth-context'

class person extends React.Component {
    constructor(props){
        super(props);
        this.element = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        
        this.element.current.focus();
    }
    render() {
        console.log(`person js render`)
        return (
            <Aux >
                
                    {this.context.authenticated ?<p>Authenticated</p>:<p>Please login</p>}
               
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} ref={this.element} />
            </Aux>
        )
    }
}
person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(person, classes.Person);