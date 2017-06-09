import React, { Component } from 'react';
import Loader from '../Loader';
import Error from '../Error';
import Currently from './Currently';
import Hourly from './Hourly';
import Daily from './Daily';

class Main extends Component {
  render() {
    const { data, toggleTempType, convertTempType, isFahrenhite, city, isLoading, error } = this.props;

    if (!data) return <div className="main"><Loader /></div>;

    if (error) return <div className="main"><Error error={error} /></div>;

    const { currently, daily, hourly } = data;

    return (
      <div className="main">
        <div className="wrapper">
          {isLoading && <Loader />}
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
