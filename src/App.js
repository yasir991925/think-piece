import React from "react";
import Authenticate from "./components/Authenticate";
import PostList from "./components/PostList";
import { Switch, Route, Link } from "react-router-dom";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="ui container">
      <Link to="/" className="header">
        <h1>Think Piece</h1>
      </Link>
      <Authenticate />
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route exact path="/profile" component={UserProfile} />
      </Switch>
    </div>
  );
}

export default App;
