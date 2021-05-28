import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 
import {searchCountry, fetchCountries} from '../../actions/searchActions';
import {connect} from 'react-redux'; 

const searchStyle={
    backgroundColor: '#6A84D2' 
}

const btnStyle = {
    backgroundColor: 'white'
}


export class SearchForm extends Component {
  onChange = e => {
    this.props.searchCountry(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchCountries(this.props.text);
    // this.props.setLoading();
  };



  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center" style={searchStyle}>
        <div className="container">
          <h1 className="display-4 mb-3">
          <FontAwesomeIcon icon={faSearch} /> Search for Country
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Country"
              onChange={this.onChange}
            />
            <button style={btnStyle} type="submit" className="btn btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state=> ({
    text: state.countries.text
})

export default connect( mapStateToProps, {searchCountry, fetchCountries})(SearchForm); 