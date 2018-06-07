import React, { Component } from 'react';
import { connect } from 'react-redux';
import Weather from '../../components/Weather/weather';
import Error from '../Error/Error';
import mapStateToProps from './mapper';
import './weather_list.css';

class WeatherList extends Component {
  checkIfErrorOrLoading() {
    const loadingMessage = 'Loading...';

    if (this.props.weatherIsLoading && this.props.weatherHasErrored) {
      return <Error />;
    } else if (this.props.weatherIsLoading) {
      return loadingMessage;
    } else if (this.props.weatherHasErrored) {
      return <Error />;
    }

    return null;
  }

  render() {
    return (
      <div className="table-responsive">
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
          </tbody>
        </table>
        {this.checkIfErrorOrLoading()}
      </div>
    );
  }
}

export default connect(mapStateToProps)(WeatherList);
