import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import CountryCard from './CountryCard';

export class CountriesContainer extends Component {
    render() {
        const {countries} = this.props; 
        let content = ""; 

        content = countries.length > 0 ? 
        countries.map((country, index) => (
            <CountryCard key={index} country={country} />
          )) : null
        return (
            <div className="row">
                {content}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    countries: state.countries.countries
})
export default connect(mapStateToProps)(CountriesContainer)
