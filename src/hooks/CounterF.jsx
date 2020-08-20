import React, { useState } from 'react';

function Counterf(props) {
    
    const [ count, setState] = useState(0);
    
    return (
        <React.Fragment>
                <div>Count: {count}</div>
                <button onClick={ () => setState(count + 1) }>Increase</button>
        </React.Fragment>
    );
}

export default Counterf;