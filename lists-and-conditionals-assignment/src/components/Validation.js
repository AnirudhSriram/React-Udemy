import React from 'react';

const Validation = (props) => {
    const lengthCalc = () => {
        return props.length >=5 ? 'Text Long Enough' : 'Text Too Short';
    }
    return <p>{lengthCalc()}</p>
}

export default Validation;