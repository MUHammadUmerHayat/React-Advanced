import React, { useState, useEffect } from 'react';

function Counterf(props) {
    
    const [ count, setCount] = useState(0);
    const [ name, setName] = useState('');

    // componentDidMount
    // componentDidUpdate
    // componentWillUnmount
    useEffect(() => {
        document.title = `${name} has clicked ${count} times`;
       
        return () => {
            console.log('Clean Up');
        };
    });
    
    return (
        <React.Fragment>
            <input type="text" onChange={e => setName(e.currentTarget.value) } />
            <div>{name} has clicked {count} times</div>
            <button onClick={ () => setCount(count + 1) }>Increase</button>
        </React.Fragment>
    );
}

export default Counterf;