import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default ({
  data, color, units, nowTemp,
}) => (
  <td>
    <Sparklines svgHeight={160} svgWidth={220} data={data}>
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>Average: {average(data)} {units}</div>
    {nowTemp ? <div>Now: {nowTemp} {units}</div> : null}
  </td>
);
