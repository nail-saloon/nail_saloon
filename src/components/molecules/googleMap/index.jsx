import GoogleMapReact from 'google-map-react';
import React from 'react';
import LocationPin from '../LocationPin';
import { FooterHeader, FooterText, MapFooter, Wrapper } from './styles';

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
      <MapFooter>
        <div>
          <FooterHeader>Address</FooterHeader>
          <FooterText>
            No 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate
          </FooterText>
          <button>Get Direction</button>
        </div>
        <div>
          <FooterHeader>Business Hour</FooterHeader>
          <FooterText>
            No 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate
          </FooterText>
        </div>
        <div>
          <FooterHeader>Contact Us</FooterHeader>
          <FooterText>+234587954458</FooterText>
          <button>Call Us</button>
        </div>
      </MapFooter>
    </Wrapper>
  );
};

export default Map;
