import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/About">소개</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
    </div>
  );
}

export default App;
