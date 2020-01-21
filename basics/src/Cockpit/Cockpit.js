import React, { useRef, useEffect,useContext } from 'react';
import classes from './Cockpit.css'
import AuthContext from '../context/auth-context'
const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);
    useEffect(() => toggleBtnRef.current.click(), [])
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.button;
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a {props.name} App </h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
            
                 <button onClick={props.login}>Log {authContext.authenticated?'out':'in'}</button>
            


        </div>
    )
}

export default Cockpit;