import React from 'react'
import styled from 'styled-components';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';

export const Wrapper = styled.div`
  margin-block: 5rem;
  text-align: center;
  h1{
    font-size: ${FONTSIZES.xxlarge};
    font-weight: ${FONTWEIGHTS.xbold};
    
  }
`
const Vision = () => {
  return (
    <Wrapper>
        <h1>Our Vision & Mission</h1>
        <p>
        Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
        vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
        porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed
        lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis
        nisi, ac posuere leo.
        </p>
        <p>
        Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis.
        Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque,
        pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat
        sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor 
        suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut 
        arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
        </p>
    </Wrapper>
  )
}

export default Vision