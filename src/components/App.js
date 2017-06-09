import React, { Component } from 'react';
import axios from 'axios';
import SearchBox from './SearchBox';
import Main from './Main/Main';
import Map from './Map/Map';

const DARKSKY_KEY = config.DARKSKY_KEY;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { data: null, city: '', latlng: { lat: 31, lng: 122 }, error: '', isFahrenhite: false, isLoading: true };

    this.proxy = 'https://crossorigin.me/';
    this.root_url = 'https://api.darksky.net/forecast';

    this.ipinfo = 'https://ipinfo.io';

    this.onSearch = this.onSearch.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this);
    this.getIpInfomation = this.getIpInfomation.bind(this);
    this.toggleTempType = this.toggleTempType.bind(this);
    this.convertTempType = this.convertTempType.bind(this);
  }

  getWeatherData(latlng) {
    const { lat, lng } = latlng;
    const url = `${this.proxy}${this.root_url}/${DARKSKY_KEY}/${lat},${lng}?lang=zh`;
    this.setState({ isLoading: true });
    axios.get(url)
      .then(({ data }) => this.setState({ data }))
      .then(() => this.setState({ isLoading: false }))
      .catch(error => this.setState({ error: error.message, isLoading: false }));
  }

  getIpInfomation() {
    axios.get(this.ipinfo)
      .then(data => {
        const [lat, lng] = data.data.loc.split(',');
        const { city } = data.data;
        const latlng = { lat, lng };
        this.setState({ city, latlng });
      })
      .then(() => this.getWeatherData(this.state.latlng))
      .catch(error => this.setState({ error }));
  }

  onSearch(city, latlng) {
    this.setState({ city, latlng });
  }

  toggleTempType(isFahrenhite) {
    this.setState({ isFahrenhite });
  }

  convertTempType(temp) {
    return Math.ceil(this.state.isFahrenhite ? temp : (temp - 32) / 1.8);
  }

  componentDidMount() {
    this.getIpInfomation();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }

  render() {
    return (
      <div className="container">
        <h1 className="header">本周天气</h1>
        <SearchBox onSearch={this.onSearch} getWeatherData={this.getWeatherData} />
        <Main {...this.state} toggleTempType={this.toggleTempType} convertTempType={this.convertTempType} />
        <Map latlng={this.state.latlng} />
      </div>
    );
  }
}

export default App;
