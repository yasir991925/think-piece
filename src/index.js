import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import PostsProvider from "./Providers/PostsProviders";
import AuthProvider from "./Providers/AuthProvider";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <AuthProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </AuthProvider>
  </Router>,
  document.getElementById("root")
);
