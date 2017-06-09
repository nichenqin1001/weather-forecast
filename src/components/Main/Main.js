import React, { Component } from 'react';
import Loader from '../Loader';
import Currently from './Currently';
import Hourly from './Hourly';
import Daily from './Daily';

class Main extends Component {
  render() {
    const { data, toggleTempType, convertTempType, isFahrenhite, city, isLoading } = this.props;

    if (!data || isLoading) return <div className="main"><Loader /></div>;

    const { currently, daily, hourly } = data;

    return (
      <div className="main">
        <div className="wrapper">
          <Currently convertTempType={convertTempType} daily={daily} toggleTempType={toggleTempType} isFahrenhite={isFahrenhite} city={city} currently={currently} />
          <Hourly convertTempType={convertTempType} hourly={hourly} />
          <h3>未来7天天气</h3>
          <Daily convertTempType={convertTempType} daily={daily} />
        </div>
      </div>
    );
  }
}

export default Main;
