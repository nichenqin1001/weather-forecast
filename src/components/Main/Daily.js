import React from 'react';
import DailyWeather from './DailyWeather';

const Daily = ({ daily, convertTempType, onSelectDailyWeather, selectedDailyWeather }) => {
  return (
    <div className="daily clearfix">
      {daily.data.map(dailyWeather =>
        <DailyWeather
          key={dailyWeather.temperatureMaxTime}
          selectedDailyWeather={selectedDailyWeather}
          onSelectDailyWeather={onSelectDailyWeather}
          convertTempType={convertTempType}
          dailyWeather={dailyWeather} />)}
    </div>
  );
};

export default Daily;
