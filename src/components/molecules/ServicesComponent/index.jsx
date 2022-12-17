import React from 'react';
import { GalleryData } from '../../../utilities/GalleryData';
import Vision from '../Vision';
import { Header, HomeLink} from '../AboutComponent/styles'
import { Wrapper, ServicesFlex } from './styles';


const ServicesComponent = () => {
  return (
    <Wrapper>
        <div>
            <Header>Services</Header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor 
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
            </p>
        </div>
        <div>
            <Header>Manicure</Header>
            <ServicesFlex>
                {GalleryData.map(data => data.Manicure?.map((e, index) => {
                        return(
                            <div>
                                    <img src= {e} alt="" />
                            </div>
                        )
                    }))}
            </ServicesFlex>
            <HomeLink to='*'>Go to Gallery</HomeLink>
        </div>
        <div>
            <Header>Pedicure</Header>
            <p>
            Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis.
            Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque,
            pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget
            feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu,
            tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris
            id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
            </p>
            <ServicesFlex>
                {GalleryData.map(data => data.Pedicure?.map((e, index) => {
                        return(
                            <div>
                                    <img src= {e} alt="" />
                            </div>
                        )
                    }))}
            </ServicesFlex>
            <HomeLink to='*'>Go to Gallery</HomeLink>
        </div>
        <div>
            <Header>Overview</Header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
            metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
            sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent
            auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor 
            urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
        </p>
        </div>

        <Vision/>
        <HomeLink to='*'>Go to homepage</HomeLink>
    </Wrapper>
    
  )
}

export default ServicesComponent