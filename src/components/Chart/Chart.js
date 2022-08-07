import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

export default function Chart(props) {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={props.dataPoint.value}
          maxValue={null}
          label={props.dataPoint.label}
          key={props.dataPoint.label}
        />
      ))}
    </div>
  );
}
