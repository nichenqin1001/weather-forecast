import React from 'react';
import classnames from 'classnames';
import moment from 'moment';

const dawn = require('../../images/002-dawn.png');
const sunset = require('../../images/001-sunset.png');

const DailyWeatherDetail = ({ selectedDailyWeather, convertTempType }) => {
  if (!selectedDailyWeather) return <div className="daily-detail"></div>;
  return (
    <div className={classnames("daily-detail", { "show": !!selectedDailyWeather })}>
      <h4 className="daily-detail__summary">{selectedDailyWeather.summary}</h4>
      <div className="daily-detail__detail clearfix">
        <div className="daily-detail__detail__temp">
          <span className="daily-detail__detail__temp-temp">{convertTempType(selectedDailyWeather.temperatureMax)}°</span>
          <span className="daily-detail__detail__temp-time">{moment.unix(selectedDailyWeather.temperatureMaxTime).format('LT')}</span>
          <span className="daily-detail__detail__temp-arrow">→</span>
          <span className="daily-detail__detail__temp-temp">{convertTempType(selectedDailyWeather.temperatureMin)}°</span>
          <span className="daily-detail__detail__temp-time">{moment.unix(selectedDailyWeather.temperatureMinTime).format('LT')}</span>
        </div>
        <div className="daily-detail__detail__sunrise">
          <img src={dawn} alt="日出" className="detail__detail__sunrise-icon" />
          <span className="detail__detail__sunrise-time">{moment.unix(selectedDailyWeather.sunriseTime).format('LT')}</span>
          <img src={sunset} alt="日落" className="detail__detail__sunrise-icon" />
          <span className="detail__detail__sunrise-time">{moment.unix(selectedDailyWeather.sunsetTime).format('LT')}</span>
        </div>
        <div className="daily-detail__detail__rain"></div>
      </div>
    </div>
  );
};

export default DailyWeatherDetail;