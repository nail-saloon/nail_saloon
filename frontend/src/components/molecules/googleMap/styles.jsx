import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { FONTSIZES } from '../../../constants/fonts';

export const Wrapper = styled.div`
  width: 100%;
  // height: 65vh;
  padding: 0 10rem;
`;

export const MapFooter = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  div {
    max-width: 30rem;
  }
`;

export const FooterHeader = styled.h2`
  font-weight: 700;
  font-size: ${FONTSIZES.xxlarge};
  color: ${COLORS.xiketic};
  margin-bottom: 2rem;
`;

export const FooterText = styled.p`
  font-size: ${FONTSIZES.lg};
  color: ${COLORS.xiketic};
  margin-bottom: 1rem;
`;
