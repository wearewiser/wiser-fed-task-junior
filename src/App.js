import "./App.css";
import React from "react";
import Home from "./components/Home";
import ImageDetails from "./components/ImageDetails";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <img src="/NASA_logo.png"/>
        <h1>Lorem Ipsum</h1>
      </div>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/images/" component={ImageDetails} />
      </Router>
    </>
  );
};

export default App;
