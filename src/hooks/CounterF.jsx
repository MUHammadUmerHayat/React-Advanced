import React, { useState } from 'react';
import useDocumentTitle from './useDocumentTitle';


function Counterf(props) {
    
    const [ count, setCount] = useState(0);
    const [ name, setName] = useState('');

    useDocumentTitle(`${name} has clicked ${count} times`);
    
    return (
        <React.Fragment>
            <input type="text" onChange={e => setName(e.currentTarget.value) } />
            <div>{name} has clicked {count} times</div>
            <button onClick={ () => setCount(count + 1) }>Increase</button>
        </React.Fragment>
    );
}

export default Counterf;