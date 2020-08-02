import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Profile from "./component/Profile";
import Profiles from "./component/Profiles";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profile/:username" component={Profile} />
      <Route path="/Profiles" component={Profiles} />
    </div>
  );
}

export default App;
