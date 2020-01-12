import React from 'react';

const UserInput = (props) => {
    console.log(props)
    return (<div>
        <input type="text" onChange={props.change} value={props.name}/>
    </div>)
}

export default UserInput;