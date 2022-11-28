import { NavLink as Link } from "react-router-dom";
import styled from 'styled-components';
import { COLORS } from "../../../constants/colors";
import { FONTSIZES } from "../../../constants/fonts";
import { FONTWEIGHTS } from "../../../constants/fonts";

export const FooterStyle = styled.footer`
  background: ${COLORS.xiketic};
  height: 100vh;
`;
export const FooterRow = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
//  height: 10rem;
 padding: 7rem 3rem
`;
export const Bold = styled.h1`
 color: ${COLORS.Verve};
 font-weight: ${FONTWEIGHTS.bold};
 font-size: 2.5rem
`;
export const FooterColumn = styled.div`
 display: flex;
 flex-direction: column;
 gap:20px;


`;
export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;

`;

export const FooterInput = styled.input`
  background: none;
  border: 1px solid ${COLORS.Verve};
  border-right: none;
  height: 6rem;
  width: 30rem;
  padding-left: 1rem;
  font-size: ${FONTSIZES.xsmall};
  font-weight: 200;

  &::placeholder{
    color: ${COLORS.Verve}

  }
`
export const SignupBtn = styled.button`
  background: ${COLORS.Verve};
  border: 1px solid ${COLORS.Verve};
  height: 6rem;
  font-size: ${FONTSIZES.xsmall};
  font-weight: ${FONTWEIGHTS.bold};
  padding: 0 1rem

`
export const LinkWrapper = styled.div`
  display: flex;
  gap: 4rem
`
export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem
`
export const FooterLink = styled(Link)`
  font-size: ${FONTSIZES.base};
  color: ${COLORS.Verve};
  text-decoration: none;
`