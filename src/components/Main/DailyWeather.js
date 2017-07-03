import React from 'react';
import moment from 'moment';
import classnames from 'classnames';

const Skycons = require('skycons')(window);
const skycons = new Skycons({ "color": "orange" });
skycons.play();

const DailyWeather = ({ dailyWeather, convertTempType, onSelectDailyWeather, selectedDailyWeather }) => {
  const isActive = !!selectedDailyWeather && selectedDailyWeather.time === dailyWeather.time;
  return (
    <div
      onClick={() => onSelectDailyWeather(dailyWeather)}
      className={classnames("daily__weather", { "active": isActive })}>
      <div className="daily__weather-time">{moment.unix(dailyWeather.time).format('dddd')}</div>
      <canvas width="48" height="48" ref={el => skycons.add(el, dailyWeather.icon)}></canvas>
      <div className="daily__weather-temp">
        <div className="daily__weather-temp__max">{convertTempType(dailyWeather.temperatureMax)}°</div>
        <div className="daily__weather-temp__min">{convertTempType(dailyWeather.temperatureMin)}°</div>
      </div>
    </div>
  );
};

export default DailyWeather;
