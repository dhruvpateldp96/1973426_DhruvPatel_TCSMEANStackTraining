import React, { Component } from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

import Assignment1 from "./components/containers/Assignment1/Assignment1";

import store from "./store";
import Landing from "./components/Landing";
import Restaurant from "./components/containers/Sec7_1.20/Restaurant";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route path="/assignment/1" component={Assignment1} />
        <Route path="/restaurant" component={Restaurant} />
        {/* <Route exact path="/movie/:id" component={Movie} /> */}
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
