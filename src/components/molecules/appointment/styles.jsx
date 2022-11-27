import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constants/fonts';

export const Wrapper = styled.div`
  width: 100%;
  padding: 8rem 11rem 8rem 11rem;
  background-color: ${COLORS.xiketic};
`;
export const Header = styled.h1`
  color: ${COLORS.white};
  margin-bottom: 5.6rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.9rem;

  .check-wrapper {
    display: flex;

    &__container {
    }
  }
`;

export const Label = styled.label`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
  color: ${COLORS.white};
  margin-bottom: 0.8rem;
`;

export const TextEditor = styled.textarea`
  resize: none;
  border-radius: 2.4rem;
  height: 4.4rem;
  padding: 1.5rem;
  overflow: hidden;
  outline: none;
  border: none;
  background-color: ${COLORS.gainsboro};
`;
