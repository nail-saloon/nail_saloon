import React from 'react';
import {
  DPIconOnboard,
  DPIconProduct,
  DPIconQuality,
  DPIconResult,
  DPIconSalesIcon,
  DPIconSupport,
} from '../../../icons';
import {
  CellHeader,
  CellWrapper,
  Header,
  HeaderParagraph,
  HeaderText,
  SubHeader,
  Wrapper,
} from './styles';

const FocusComponent = () => {
  return (
    <Wrapper>
      <Header>Our User Focused Nail Salon</Header>
      <SubHeader>Lorem ipsum dolor sit amet, consectetur adipis elit</SubHeader>
      <CellWrapper>
        <div className="cell">
          <CellHeader>
            <DPIconSupport />
            <HeaderText>Support</HeaderText>
            <HeaderParagraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              officiis consequuntur eos saepe labore vitae rerum quisquam
              deleniti ex cupiditate incidunt, repudiandae corporis
              perspiciatis, nemo ipsa similique iusto laboriosam. Doloremque?
            </HeaderParagraph>
          </CellHeader>
        </div>
        <div className="cell">
          <CellHeader>
            <DPIconSalesIcon />
            <HeaderText>Sales</HeaderText>
            <HeaderParagraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              officiis consequuntur eos saepe labore vitae rerum quisquam
              deleniti ex cupiditate incidunt, repudiandae corporis
              perspiciatis, nemo ipsa similique iusto laboriosam. Doloremque?
            </HeaderParagraph>
          </CellHeader>
        </div>
        <div className="cell">
          <CellHeader>
            <DPIconOnboard />
            <HeaderText>Onboarding</HeaderText>
            <HeaderParagraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              officiis consequuntur eos saepe labore vitae rerum quisquam
              deleniti ex cupiditate incidunt, repudiandae corporis
              perspiciatis, nemo ipsa similique iusto laboriosam. Doloremque?
            </HeaderParagraph>
          </CellHeader>
        </div>
        <div className="cell">
          <CellHeader>
            <DPIconProduct />
            <HeaderText>Product</HeaderText>
            <HeaderParagraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              officiis consequuntur eos saepe labore vitae rerum quisquam
              deleniti ex cupiditate incidunt, repudiandae corporis
              perspiciatis, nemo ipsa similique iusto laboriosam. Doloremque?
            </HeaderParagraph>
          </CellHeader>
        </div>
        <div className="cell">
          <CellHeader>
            <DPIconQuality />
            <HeaderText>Quality</HeaderText>
            <HeaderParagraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              officiis consequuntur eos saepe labore vitae rerum quisquam
              deleniti ex cupiditate incidunt, repudiandae corporis
              perspiciatis, nemo ipsa similique iusto laboriosam. Doloremque?
            </HeaderParagraph>
          </CellHeader>
        </div>
        <div className="cell">
          <CellHeader>
            <DPIconResult />
            <HeaderText>Results</HeaderText>
            <HeaderParagraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              officiis consequuntur eos saepe labore vitae rerum quisquam
              deleniti ex cupiditate incidunt, repudiandae corporis
              perspiciatis, nemo ipsa similique iusto laboriosam. Doloremque?
            </HeaderParagraph>
          </CellHeader>
        </div>
      </CellWrapper>
    </Wrapper>
  );
};

export default FocusComponent;
