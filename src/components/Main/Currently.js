import React, { Component } from 'react';
import moment from 'moment';
import classnames from 'classnames';

const Skycons = require('skycons')(window);
const skycons = new Skycons({ "color": "orange" });
skycons.play();

class Currently extends Component {
  render() {
    const { currently, daily, city, isFahrenhite, toggleTempType, convertTempType } = this.props;
    return (
      <div className="currently">
        <h3 className="currently__address">
          <span ref="city" className="currently__address-city">{city}</span>
          - {daily.summary}
        </h3>
        <p className="currently__para">{moment.unix(currently.time).format('llll')}</p>
        <p className="currently__para">{currently.summary}</p>
        <div className="currently__detail clearfix">
          <canvas className="currently__detail-icon" width="64" height="64" ref={el => skycons.add(el, currently.icon)}></canvas>
          <div className="currently__detail-temp">
            {convertTempType(currently.temperature)}
          </div>
          <div className="currently__detail-switch">
            <span onClick={() => toggleTempType(false)} className={classnames({ "active": isFahrenhite })}>°C </span>
            |
          <span onClick={() => toggleTempType(true)} className={classnames({ "active": !isFahrenhite })}> °F</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Currently;
