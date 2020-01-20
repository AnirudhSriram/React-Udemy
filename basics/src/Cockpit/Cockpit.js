import React, { useEffect } from 'react';
import classes from './Cockpit.css'
const Cockpit = (props) => {

    useEffect(() => {
        console.log('cockpit js useEffect');
        setTimeout(() => console.log('cockpit js useeffect settimeout'), 1000)
        return () => console.log('cockpit js cleaning up now')
    }, [])

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
            {/* <h1>Hi, I'm a {props.name} App </h1> */}
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default React.memo(Cockpit);