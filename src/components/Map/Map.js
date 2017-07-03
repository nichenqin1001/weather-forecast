import React, { PureComponent } from 'react';
import GoogleMapReact from 'google-map-react';

const createMapOptions = () => ({ scrollwheel: false });

class Map extends PureComponent {
  render() {
    const { lat, lng } = this.props.latlng;
    const center = [lat, lng];
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyBaziDi6xW4A0EoXF_IsbhRvVymERgqvbE'
          }}
          options={createMapOptions}
          center={center}
          defaultZoom={11}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
