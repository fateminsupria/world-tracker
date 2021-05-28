import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Landings from './components/Home/Landings';
import {Provider} from 'react-redux';
import store from './store'; 

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div>
      <Header />
      <Landings/>
      {/* <Route exact path="/" component={Landing} />
      <Route exact path="/movie/:id" component={Movie} /> */}
      <Footer />
    </div>
  </Router>
  </Provider>
  );
}

export default App;
