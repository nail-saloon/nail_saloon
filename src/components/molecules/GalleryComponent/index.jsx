import React from 'react'
import { FrameImg } from '../../atoms/frames/styles'
import { GalleryData } from '../../../utilities/GalleryData'
import { Wrapper, Row, ImgWrapper } from './styles'
import { Header, HomeLink } from '../AboutComponent/styles'
const GalleryComponent = (small) => {
  return (
    <Wrapper>
        <Header>Gallery</Header>
        <p>Here are some of our best pieces and customer favourites</p>
        <div className="GalleryWrapper">
            <Row>
                {GalleryData.map(data => data.RowOne?.map((e, index) => {
                    return(
                        <ImgWrapper>
                            <FrameImg small = {small} key={index}>
                                <img src= {e} alt="" />
                            </FrameImg>
                        </ImgWrapper>
                    )
                }))}
            </Row>

            <Row>
                {GalleryData.map(data => data.RowTwo?.map((e, index) => {
                    return(
                        <ImgWrapper>
                            <FrameImg small = {small} key={index}>
                                <img src= {e} alt="" />
                            </FrameImg>
                        </ImgWrapper>
                    )
                }))}
            </Row>

            <Row>
                {GalleryData.map(data => data.RowThree?.map((e, index) => {
                    return(
                        <ImgWrapper>
                            <FrameImg small = {small} key={index}>
                                <img src= {e} alt="" />
                            </FrameImg>
                        </ImgWrapper>
                    )
                }))}
            </Row>

            <Row>
                {GalleryData.map(data => data.RowFour?.map((e, index) => {
                    return(
                        <ImgWrapper>
                            <FrameImg small = {small} key={index}>
                                <img src= {e} alt="" />
                            </FrameImg>
                        </ImgWrapper>
                    )
                }))}
            </Row>
            
            
        </div>
      <HomeLink to='*'>Go to homepage</HomeLink>

    </Wrapper>
  )
}

export default GalleryComponent