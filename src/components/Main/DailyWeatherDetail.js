import React from 'react';
import classnames from 'classnames';

const DailyWeatherDetail = ({ selectedDailyWeather }) => {
  if (!selectedDailyWeather) return <div className="daily-detail"></div>;
  return (
    <div className={classnames("daily-detail", { "show": !!selectedDailyWeather })}>
      <h4 className="daily-detail__summary">{selectedDailyWeather.summary}</h4>
    </div>
  );
};

export default DailyWeatherDetail;