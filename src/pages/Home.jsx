import React from 'react'
import Structure from '../components/layouts/Structure';
import PostHero from '../components/molecules/PostHero';
import Carousel from '../components/molecules/carousel';

const Home = () => {
  return (
    <Structure>
      Home
      <PostHero/>
      <Carousel />
    </Structure>
  );
};

export default Home;
