import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../../components/Chart/chart';
import mapStateToProps from './mapper';
import './weather_list.css';

class WeatherList extends Component {
  checkIfErrorOrLoading() {
    if (this.props.weatherIsLoading && this.props.weatherHasErrored) {
      return <tr><td colSpan="4">Error, try again please...</td></tr>;
    } else if (this.props.weatherIsLoading) {
      return <tr><td colSpan="4">Loading...</td></tr>;
    }

    return null;
  }

  static renderWeather(cityData, index) {
    const { name } = cityData.city;
    const temps = cityData.list.map(weather => weather.main.temp);
    const cTemps = temps.map(temp => temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const nowTemp = Math.round(cTemps[0]);

    return (
      <tr key={index}>
        <td>{name}</td>
        <td>
          <Chart data={cTemps} color="orange" nowTemp={nowTemp} units="C" />
        </td>
        <td>
          <Chart data={pressures} color="orange" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="orange" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
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
          {this.props.weather.map(WeatherList.renderWeather)}
          {this.checkIfErrorOrLoading()}
        </tbody>
      </table>
    );
  }
}

export default connect(mapStateToProps)(WeatherList);
