import React from 'react';
import moment from 'moment';
const Skycons = require('skycons')(window);

class Weather extends React.Component {
  componentDidMount() {
    const { icon } = this.props.weather;
    const skycons = new Skycons({});
    skycons.add(this.refs.skycon, icon);
  }

  render() {
    const { weather, className } = this.props;
    return (
      <div className={className}>
        <h5>日期： {moment.unix(weather.apparentTemperatureMaxTime).format("YYYY-MM-DD")}</h5>
        <div className="w-today-left">
          <canvas ref="skycon" width="128" height="128"></canvas>
          <p className="temp">最高气温：{weather.apparentTemperatureMax}</p>
          <p className="summary">{weather.summary}</p>
        </div>
        <div className="w-today-right">
          <p>最低气温：{weather.apparentTemperatureMin}</p>
          <p>露点：{weather.dewPoint}</p>
          <p>湿度：{weather.humidity}</p>
        </div>
      </div>
    );
  }
};

export default Weather;
