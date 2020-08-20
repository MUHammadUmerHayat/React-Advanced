import React from 'react';
import './App.css';
import CounterC from './hooks/CounterC';
import CounterF from './hooks/CounterF';

function App() {
  return (
    <React.Fragment>
        <CounterC />
        <CounterF />
    </React.Fragment>
  );
}

export default App;
