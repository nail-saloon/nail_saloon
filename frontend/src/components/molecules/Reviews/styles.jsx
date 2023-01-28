import styled from 'styled-components';
import { FONTSIZES } from '../../../constants/fonts';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10rem;
`;

export const Header = styled.h1`
  text-align: center;
  font-size: ${FONTSIZES.xxxlarge};
`;

export const ReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.7rem;
  padding: 3rem 10rem;

  .reviewWrapper {
    width: 25rem;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    font-size: ${FONTSIZES.lg};
  }
  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
`;
export const ReviewBtn = styled.div`
  display: flex;
  justify-content: center;
`;
