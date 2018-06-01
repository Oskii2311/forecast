import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import './style/weather_list.css';

class WeatherList extends Component {
    renderWeather(cityData, index) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const cTemps = temps.map((temp) => temp-273);
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
        )
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
                    {this.props.weather.map(this.renderWeather)}
                    {this.props.weatherIsLoading && this.props.weatherHasErrored ?
                    <tr><td colSpan="4">Error, try again please...</td></tr> :
                    this.props.weatherIsLoading ?
                    <tr><td colSpan="4">Loading...</td></tr> : 
                    null}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather, weatherHasErrored, weatherIsLoading}) {
    return {
        weather,
        weatherHasErrored,
        weatherIsLoading
    }
}

export default connect(mapStateToProps)(WeatherList);