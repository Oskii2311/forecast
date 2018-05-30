import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import './style/weather_list.css';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const cTemps = temps.map((temp) => temp-273);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return ( 
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={cTemps} color="orange" units="C" />
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
        console.log(this.props)

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
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);