import React from 'react';
import DailyWeather from './DailyWeather';

const Daily = ({ daily, convertTempType, onSelectDailyWeather }) => {
  return (
    <div className="daily clearfix">
      {daily.data.map(dailyWeather => <DailyWeather key={dailyWeather.temperatureMaxTime} onSelectDailyWeather={onSelectDailyWeather} convertTempType={convertTempType} dailyWeather={dailyWeather} />)}
    </div>
  );
};

export default Daily;
