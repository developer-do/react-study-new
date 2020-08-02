import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Profile from "./component/Profile";

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
        <li>
          <Link to="/profile/velopert">velopert의 프로필</Link>
        </li>
        <li>
          <Link to="/profile/dohyun">dohyun의 프로필</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
}

export default App;
