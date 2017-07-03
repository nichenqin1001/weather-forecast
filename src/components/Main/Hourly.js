import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Hourly = ({ hourly, convertTempType }) => {
  const temps = hourly.data.map(weatherData => convertTempType(weatherData.temperature));
  return (
    <div className="hourly">
      <Sparklines data={temps} height={20} >
        <SparklinesLine color="orange" />
      </Sparklines>
    </div>
  );
};

export default Hourly;
