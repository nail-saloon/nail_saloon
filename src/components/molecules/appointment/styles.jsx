import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constants/fonts';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 5rem 11rem 8rem 11rem;
  background-color: ${COLORS.xiketic};
`;
export const Header = styled.h1`
  display: flex;
  justify-content: space-between;
  color: ${COLORS.white};
  margin-bottom: 5.6rem;

  .btn-cancel {
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.9rem;

  .check-wrapper {
    display: flex;
    align-items: center;

    &__container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 1.5rem;
      color: ${COLORS.white};

      .check {
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 0.5rem;
      }
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

export const SelectDrop = styled.select`
  width: 100%;
  height: 4.4rem;
  border: none;
  outline: none;
  border-radius: 0.8rem;
`;

export const Footer = styled.h2`
  position: absolute;
  bottom: 5px;
  right: 10px;
  text-decoration: underline;
  color: ${COLORS.white};
  cursor: pointer;
`;
