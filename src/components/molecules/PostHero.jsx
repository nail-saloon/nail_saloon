import React from 'react'
import Frame from '../atoms/frames/Frame'
import styled from 'styled-components';
import Button from '../atoms/Button';
// import { BUTTON_TYPES } from '../../utilities/button';
import { FONTSIZES } from '../../constants/fonts';
import Frame1 from '../atoms/frames/Frame1';

export const Container = styled.div`
    padding: 12rem;
`
export const FlexWrapper = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    gap: 10rem;
    height: 100vh;
    margin-bottom: 20rem;
`
export const LoremTxt = styled.p`
   font-size: ${FONTSIZES.base};
   margin-top: 4.5rem;

`
export const Services = styled.h1`
  font-size: 3.6rem
`

const PostHero = () => {
  return (
    <Container>
      <FlexWrapper>
        <Frame/>
        <div>
          <Button 
           children={'Find Salon'}
           
          />
          <LoremTxt>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Nunc vulputate libero et velit interdum, ac aliquet Lorem ipsum 
             dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
            et velit interdum, ac aliquet. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
             libero et velit interdum, ac aliquetLorem ipsum dolor sit amet, 
             consectetur adipiscing elit. Nunc vulputate libero et velit interdum, 
             ac aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquetLorem ipsum dolor sit amet, 
            
             </LoremTxt>
        </div>
        </FlexWrapper>
        <FlexWrapper>
        <div className="">
          <Services>Our Services</Services>
          <LoremTxt>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Nunc vulputate libero et velit interdum, ac aliquet Lorem ipsum 
             dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
            et velit interdum, ac aliquet. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
             libero et velit interdum, ac aliquetLorem ipsum dolor sit amet, 
             consectetur adipiscing elit. Nunc vulputate libero et velit interdum, 
             ac aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquetLorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Nunc vulputate libero et velit interdum, 
              ac aliquet
             </LoremTxt>
             <Button children = {'Read More >>'}/>
        </div>
        <Frame1/>
        </FlexWrapper>
    </Container>
  )
}

export default PostHero