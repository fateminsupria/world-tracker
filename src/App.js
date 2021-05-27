import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/home">
          {/* <Home/> */}
        </Route>
        <Route path='/country/:countryName'>
          {/* <CountryDetail></CountryDetail> */}
        </Route>
        <Route exact path="/">
          {/* <Home/> */}
        </Route>
        <Route path="*">
          {/* <NoMatch/> */}
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
