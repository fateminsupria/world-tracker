import React, { Component } from 'react';
import SearchForm from './SearchForm';
import {connect} from 'react-redux'; 
import Spinner from '../layout/Spinner';
import CountriesContainer from './CountriesContainer'; 

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
        {loading ? <Spinner/> : <CountriesContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.countries.loading
});

export default connect(mapStateToProps)(Landing);