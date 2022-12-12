import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { FONTWEIGHTS } from '../../../constants/fonts';

export const SlideShow = styled.div`
  margin: 0rem auto;
  overflow: hidden;
`;

export const SlideShowSlider = styled.div`
  white-space: nowrap;
  transform: ${({ index }) => `translate3d(${-index * 100}%, 0, 0)`};
  transition: ease 1000ms;
`;

export const Slider = styled.div`
  height: calc(100vh - 7rem);
  display: inline-block;
  width: 100%;
  border-radius: 40px;
  text-align: center;

  .carousel-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
export const SliderContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 15rem;
`
export const SlideHeader = styled.h1`
  font-size: 6rem;
  font-weight: ${FONTWEIGHTS.bold};
  color: ${COLORS.xiketic};
`

export const SlideDots = styled.div`
  text-align: center;

  .slideshowDot {
    display: inline-block;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    margin: 15px 7px 0px;
    background-color: #c4c4c4;
  }

  .slideshowDot.active {
    background-color: #6a0dad;
  }
`;
