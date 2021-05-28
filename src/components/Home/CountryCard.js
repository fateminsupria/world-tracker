import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const btnStyle = {
    backgroundColor: 'white'
}

export class CountryCard extends Component {
    
    render() {
        const {country} = this.props; 
        console.log(country.name); 
        return (
            <div className="col-md-3 mb-5">
            <div className="card card-body bg-dark text-center h-100">
              <img className="w-100 mb-2" src={country.flag} alt="Country Cover" />
              <h5 className="text-light card-title">
                {country.name} - {country.region}
              </h5>
              <Link className="btn" style={btnStyle} to={'/country/' + country.name}>
                Country Details
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        )
    }
}

export default CountryCard
