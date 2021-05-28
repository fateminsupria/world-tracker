import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCountry, setLoading } from '../../actions/searchActions';

import Spinner from '../layout/Spinner';

export class Country extends Component {
  componentDidMount() {
    this.props.fetchCountry(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, country } = this.props;

    let countryInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={country.Picture} className="thumbnail" alt="Picture" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{country.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Region:</strong> {country.Region}
              </li>
              <li className="list-group-item">
                <strong>Currency:</strong> {country.Currency}
              </li>
              <li className="list-group-item">
                <strong>calling Code:</strong> {country.CallingCode}
              </li>
              <li className="list-group-item">
                <strong>Language:</strong> {country.Language}
              </li>
              <li className="list-group-item">
                <strong>Famous place:</strong> {country.FamousPlace}
              </li>
              <li className="list-group-item">
                <strong>Population:</strong> {country.Population}
              </li>
              <li className="list-group-item">
                <strong>Image:</strong> {country.Image}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>About </h3>
              {country.Plot}
              <hr />
              <a
                href={'https://restcountries.eu/rest/v2/all' + country.name}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on 
              </a>
              <Link to="/" className="btn btn-default text-light">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

    let content = loading ? <Spinner /> : countryInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.countries.loading,
  country: state.countries.country
});

export default connect(
  mapStateToProps,
  { fetchCountry, setLoading }
)(Country);