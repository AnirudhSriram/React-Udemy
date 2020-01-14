import React from 'react';
import './Person.css'

const Person = (props) => {
    const style = {
        '@media (min-width:500px)' : {
            width : '450px',
             backgroundColor:'pink'
        }
    }
    return (
        <div className="Person" style={style}>
            <p >I'm  {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type='name' onChange={props.change} placeholder={props.name} />
            <button onClick={props.click}>Delete</button>
        </div>
    )
}

export default Person;