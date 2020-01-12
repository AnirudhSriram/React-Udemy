import React from 'react';

const UserOutput = props => {
    return (
        <div style={{border:'1px solid green', margin:'5px auto'}}>
            <h1>user Name : {props.name}</h1>
            <p>Lorem ipsum netus suscipit scelerisque interdum suscipit curae volutpat, mattis tortor etiam mollis lacus massa rhoncus bibendum, donec hac mollis duis vitae donec volutpat ut at ut volutpat neque erat fermentum aptent quisque pellentesque.

Taciti donec consequat dolor phasellus massa nisi eget, dapibus lobortis placerat eget vel mattis integer, aenean gravida quisque at dapibus himenaeos.

Curabitur hendrerit augue ante netus malesuada ut metus, tellus senectus nec ipsum vehicula adipiscing, mollis eros etiam ligula pharetra et.

In nisl venenatis himenaeos diam justo class vitae aptent, id leo inceptos justo posuere ut faucibus ligula, elementum fames lacus lectus diam cursus facilisis.

Neque conubia elit per feugiat volutpat tincidunt rutrum, elementum commodo consequat morbi varius vulputate, praesent quam vel aliquam turpis magna sit rutrum varius curabitur risus taciti velit tempus nulla eu hendrerit.</p>
        </div>
    )
}

export default UserOutput;