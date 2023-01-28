import React from 'react';
import { GalleryData } from '../../../utilities/GalleryData';
import { FrameImg } from '../../atoms/frames/styles';
import { Header, HomeLink } from '../AboutComponent/styles';
import { ImgWrapper, Row, Wrapper } from './styles';
const GalleryComponent = (small) => {
  return (
    <Wrapper>
      <Header>Gallery</Header>
      <p>Here are some of our best pieces and customer favourites</p>
      <div className="GalleryWrapper">
        <Row>
          {GalleryData.map((data) =>
            data.RowOne?.map((e, index) => {
              return (
                <ImgWrapper>
                  <FrameImg small={small} key={index}>
                    <img src={e} alt="" />
                  </FrameImg>
                </ImgWrapper>
              );
            })
          )}
        </Row>

        <Row>
          {GalleryData.map((data) =>
            data.RowTwo?.map((e, index) => {
              return (
                <ImgWrapper>
                  <FrameImg small={small} key={index}>
                    <img src={e} alt="" />
                  </FrameImg>
                </ImgWrapper>
              );
            })
          )}
        </Row>

        <Row>
          {GalleryData.map((data) =>
            data.RowThree?.map((e, index) => {
              return (
                <ImgWrapper>
                  <FrameImg small={small} key={index}>
                    <img src={e} alt="" />
                  </FrameImg>
                </ImgWrapper>
              );
            })
          )}
        </Row>

        <Row>
          {GalleryData.map((data) =>
            data.RowFour?.map((e, index) => {
              return (
                <ImgWrapper>
                  <FrameImg small={small} key={index}>
                    <img src={e} alt="" />
                  </FrameImg>
                </ImgWrapper>
              );
            })
          )}
        </Row>
      </div>
      <HomeLink to="/">Go to homepage</HomeLink>
    </Wrapper>
  );
};

export default GalleryComponent;
