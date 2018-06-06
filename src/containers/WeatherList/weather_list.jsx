import React, { Component } from 'react';
import { connect } from 'react-redux';
import Weather from '../../components/Weather/weather';
import mapStateToProps from './mapper';
import './weather_list.css';

class WeatherList extends Component {
  checkIfErrorOrLoading() {
    const errorMessage = <tr><td colSpan="4">Error, try again please...</td></tr>;
    const loadingMessage = <tr><td colSpan="4">Loading...</td></tr>;

    if (this.props.weatherIsLoading && this.props.weatherHasErrored) {
      return errorMessage;
    } else if (this.props.weatherIsLoading) {
      return loadingMessage;
    }

    return null;
  }

  render() {
    return (
      <div class="table-responsive">
        <table className="table table-hover weather">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (C)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.weather.map(cityData =>
                <Weather key={cityData.city.id} cityData={cityData} />)
            }
            {this.checkIfErrorOrLoading()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps)(WeatherList);
