import styled from 'styled-components';
import { FONTSIZES, FONTWEIGHTS } from '../../../constants/fonts';
import { Link } from 'react-router-dom';
import { COLORS } from '../../../constants/colors';

export const Wrapper = styled.div`
  width: 100%;
  padding: 5rem 10rem;

  .AboutFlex{
    display: flex;
    align-items: start;
    gap: 10rem;
    padding: 5rem 0;
  }
  p{
    font-size: ${FONTSIZES.xlarge};
    font-weight: ${FONTWEIGHTS.medium};
  }

`;
export const Header = styled.h1`
  font-size: ${FONTSIZES.xxxlarge};
  font-weight: ${FONTWEIGHTS.xbold};
`
export const HomeLink = styled(Link)`
 display: flex;
 justify-content: end;
 color: ${COLORS.xiketic};
 font-size: ${FONTSIZES.xlarge};
 font-weight: ${FONTWEIGHTS.xbold};

`