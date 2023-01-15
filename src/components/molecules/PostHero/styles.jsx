import styled from 'styled-components';
import { FONTSIZES } from '../../../constants/fonts';

export const Container = styled.div`
  padding: 0 12rem;
`;
export const FlexWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 10rem;
  height: 100vh;
  margin-bottom: 20rem;
`;
export const LoremTxt = styled.p`
  font-size: ${FONTSIZES.base};
  margin-top: 4.5rem;
`;
export const Services = styled.h1`
  font-size: 3.6rem;
`;
