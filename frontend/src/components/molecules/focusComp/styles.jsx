import styled from 'styled-components';
import { FONTSIZES, FONTWEIGHTS } from '../../../constants/fonts';

export const Wrapper = styled.div`
  text-align: center;
  margin: 10rem 0;
`;

export const CellWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  .cell {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33.3%;
    border: 1px solid #000;
    padding: 4.8rem;

    &:first-child,
    &:nth-child(2),
    &:nth-child(3) {
      border-top: none;
    }

    &:first-child,
    &:nth-child(4) {
      border-left: none;
    }

    &:last-child,
    &:nth-child(3) {
      border-right: none;
    }
    &:last-child,
    &:nth-child(5),
    &:nth-child(4) {
      border-bottom: none;
    }
  }
`;

export const Header = styled.h1`
  font-size: ${FONTSIZES['logo-large']};
  font-weight: ${FONTWEIGHTS.medium};
`;

export const SubHeader = styled.h2`
  margin-bottom: 10rem;
  font-size: ${FONTSIZES.base};
  font-weight: ${FONTWEIGHTS.normal};
`;
export const CellHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const HeaderText = styled.h1``;

export const HeaderParagraph = styled.p`
  font-size: ${FONTSIZES.base};
  text-align: center;
  margin-top: 1.5rem;
`;
