import GoogleMapReact from 'google-map-react';
import React from 'react';
import LocationPin from '../LocationPin';
import { Wrapper } from './styles';

const Map = ({ location, zoomLevel }) => {
  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBvrJJhKlSZZPiLriWT8GawV13Q841CBBY' }}
        defaultCenter={{ location }}
        defaultZoom={zoomLevel}
      >
        <LocationPin text="Hello" lat={37.42216} lng={-122.08427} />
      </GoogleMapReact>
    </Wrapper>
  );
};

export default Map;
