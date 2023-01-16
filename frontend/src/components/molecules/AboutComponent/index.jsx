import React from 'react'
import img from '../../../icons/imgs/About.png';
import { FrameImg } from '../../atoms/frames/styles';
import { Wrapper, Header, HomeLink } from './styles';

const AboutComponent = (props) => {
  return (
    <Wrapper>
      <Header>About Us</Header>
      <div className='AboutFlex'>
        <FrameImg props = {props}>
          <img src= {img} alt="aboutImg" />
        </FrameImg>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          </p>
          <br />
          <p>
            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi.Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          </p>
        </div>
      </div>
      <HomeLink to='*'>Go to homepage</HomeLink>
    </Wrapper>

  )
}

export default AboutComponent