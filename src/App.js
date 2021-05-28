import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Route
// } from "react-router-dom";
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Landings from './components/Home/Landings';
import {Provider} from 'react-redux';
import store from './store'; 
import Country from './components/Home/Country';



function App() {
  return (
    <Provider store={store}>
    <Router>
    <div>
      <Header />
      <Landings/>
      <Route exact path="/" component={Landings} />
      <Route exact path="/country/:id" component={Country} />
      <Footer />
    </div>
  </Router>
  </Provider>
  );
}

export default App;
