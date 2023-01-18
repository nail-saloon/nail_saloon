import React from 'react';
import { DPIconStar } from '../../../icons';
import { reviews } from '../../../utilities/Reviews';
import { Wrapper, Header, ReviewContainer, ReviewBtn } from './styles';

const Reviews = () => {
     const StarArray = [...Array(5)]
        const stars = StarArray.map(i => {
            return <DPIconStar/>
        })
    
    
  return (
    <Wrapper>
        <Header>Reviews</Header>
        <ReviewContainer>
            {reviews.map((Data, index) => {
        return(
            <div key={index} className="reviewWrapper">
                <img src={ Data.image } alt="review" />
                <div className="starWrapper">
                    {stars}
                </div>
                <div className="stars"></div>
                <p className="review">
                    <b>{Data.reviewer}: </b> 
                    {Data.review}    
                </p>
            </div>
             )
         })}
        
        </ReviewContainer>
    </Wrapper>
  )
}

export default Reviews