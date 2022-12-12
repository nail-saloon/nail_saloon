import React from 'react';
import Structure from '../components/layouts/Structure';
import Carousel from '../components/molecules/carousel';
import FocusComponent from '../components/molecules/focusComp';
import Map from '../components/molecules/googleMap';

const Home = () => {
  const location = {
    // address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  };

  return (
    <Structure>
      <Carousel />
      <Map location={location} zoomLevel={11} />
      <FocusComponent />
    </Structure>
  );
};

export default Home;
