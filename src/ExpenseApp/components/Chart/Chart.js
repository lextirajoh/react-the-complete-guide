import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

export default function Chart({ chartDataPoints }) {
  const dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {chartDataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
}
