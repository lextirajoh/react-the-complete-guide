import React from 'react';
import ChartBar from './Chartbar';
import './Chart.css';

export default function Chart({ dataPoints }) {
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxvalue={null}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
}
