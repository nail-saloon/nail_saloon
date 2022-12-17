import GoogleMapReact from 'google-map-react';
import React from 'react';
import Button from '../../atoms/Button';
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
          <Button bg 
            text =  "Get Directions"
        />
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
          <Button bg 
             text = "Call Us"
        />
        </div>
      </MapFooter>
    </Wrapper>
  );
};

export default Map;
