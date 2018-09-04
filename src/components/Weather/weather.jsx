import React from 'react';
import Chart from '../Chart/chart';

function formatData(oldDate) {
  const date = oldDate.split(':');

  return `${date[0]}:${date[1]}`;
}

function Weather({ cityData }) {
  const { name } = cityData.city;
  const { list } = cityData;
  const data = list.map(weather => ({
    time: formatData(weather.dt_txt),
    Temperature: Math.round(weather.main.temp - 273),
    Pressure: weather.main.pressure,
    Humidity: weather.main.humidity
  }));

  return (
    <tr>
      <td>{name}</td>
      <Chart data={data} dataKey="Temperature" />
      <Chart data={data} dataKey="Pressure" />
      <Chart data={data} dataKey="Humidity" />
    </tr>
  );
}

export default Weather;
