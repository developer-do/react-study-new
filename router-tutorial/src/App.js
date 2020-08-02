import React from 'react';
import { Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';

function App() {
  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path="/About" component={About} />
    </div>
  );
}

export default App;
