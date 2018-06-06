import React from 'react';
import Chart from '../Chart/chart';

function Weather({ cityData }) {
  const { name } = cityData.city;
  const { list } = cityData;
  const temps = list.map(weather => weather.main.temp);
  const cTemps = temps.map(temp => temp - 273);
  const pressures = list.map(weather => weather.main.pressure);
  const humidities = list.map(weather => weather.main.humidity);
  const nowTemp = Math.round(cTemps[0]);

  return (
    <tr>
      <td>{name}</td>
      <Chart data={cTemps} color="orange" nowTemp={nowTemp} units="C" />
      <Chart data={pressures} color="orange" units="hPa" />
      <Chart data={humidities} color="orange" units="%" />
    </tr>
  );
}

export default Weather;
