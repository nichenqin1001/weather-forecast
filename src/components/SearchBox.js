import React, { Component } from 'react';
import places from 'places.js';

class SearchBox extends Component {
  componentDidMount() {
    this.placesAutocomplete = places({
      container: this.refs.address,
      type: 'city',
      language: 'CN'
    });
    this.placesAutocomplete.on('change', e => {
      this.props.onSearch(e.suggestion.name, e.suggestion.latlng);
      this.props.getWeatherData(e.suggestion.latlng);
    });
  }

  render() {
    return (
      <div className="wrapper search-box">
        <input type="search" ref="address" placeholder="搜索天气..." />
      </div>
    );
  }
}

export default SearchBox;
