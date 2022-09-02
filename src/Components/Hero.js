import React from 'react';
import styled from 'styled-components';
import landingImage from '../assets/landing-image.jpg';

const Banner = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  background-image: url(${landingImage});
  background-size: cover;
  background-position-x: 30%;
  background-position-y: 20%;
  filter: brightness(55%);
  width: 100vw;
  height: 80vh;
`;

const Hero = () => {
  return <Banner />;
};

export default Hero;
