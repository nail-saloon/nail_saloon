import React from 'react';
import Structure from '../components/layouts/Structure';
import Carousel from '../components/molecules/carousel';
import FocusComponent from '../components/molecules/focusComp';
import Map from '../components/molecules/googleMap';
import PostHero from '../components/molecules/PostHero/Index';
import Reviews from '../components/molecules/Reviews';

const Home = () => {
  const location = {
    // address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  };

  return (
    <Structure>
      <Carousel />
      <PostHero />
      {/* <Map location={location} zoomLevel={11} /> */}
      <Reviews />
      <FocusComponent />
    </Structure>
  );
};

export default Home;
