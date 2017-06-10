import React, { Component } from 'react';
import classnames from 'classnames';
// components
import Loader from '../Loader';
import Error from '../Error';
import Currently from './Currently';
import Hourly from './Hourly';
import Daily from './Daily';
import DailyWeatherDetail from './DailyWeatherDetail';

class Main extends Component {
  render() {
    const { data, toggleTempType, convertTempType, isFahrenhite, city, isLoading, error, onSelectDailyWeather, selectedDailyWeather } = this.props;

    if (error) return (
      <div className="main">
        {isLoading && <Loader />}
        <Error error={error} />
      </div>
    );

    if (!data) return <div className="main"><Loader /></div>;

    const { currently, daily, hourly } = data;

    return (
      <div className={classnames("main", { "show": !isLoading })}>
        <div className="wrapper">
          {isLoading && <Loader />}
          <Currently convertTempType={convertTempType} daily={daily} toggleTempType={toggleTempType} isFahrenhite={isFahrenhite} city={city} currently={currently} />
          <Hourly convertTempType={convertTempType} hourly={hourly} />
          <h3>未来7天天气</h3>
          <Daily onSelectDailyWeather={onSelectDailyWeather} convertTempType={convertTempType} daily={daily} />
          <DailyWeatherDetail selectedDailyWeather={selectedDailyWeather} />
        </div>
      </div>
    );
  }
}

export default Main;
