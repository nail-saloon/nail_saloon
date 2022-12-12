import React from 'react'
import Frame from '../../atoms/frames/RoundEdge'
import Button from '../../atoms/Button';
import Frame1 from '../../atoms/frames/RoundTop';
import { Container, FlexWrapper, LoremTxt, Services } from './styles';



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