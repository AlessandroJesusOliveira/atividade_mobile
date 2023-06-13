import React, {useState} from 'react';
import CounterContext from './src/contexts/CounterContext';

import {Routes} from './src/routes';

function App(): JSX.Element {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{count, setCount}}>
      <Routes />
    </CounterContext.Provider>
  );
}

export default App;
