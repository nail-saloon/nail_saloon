import styled, {css} from "styled-components";

export const FrameImg = styled.div`
    width: ${(small) => (small) ? '43rem' : ''};
    height: 45rem;
    position: relative;
    border-radius: ${(props) => (props) ? '2rem' : ''};
    z-index: 1;
    margin-left: 5.3rem;
    
    &::before{
      content: "";
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background: #A5694B;
      position: absolute;
      top: 2.1rem;
      right: 5.3rem;
      z-index: -1;
    }

      &::after{
        content: "";
        width: 100%;
        height: 100%;
        border-radius: inherit;
        border: 1px solid #1B0D13;
        position: absolute;
        right: 2.5rem;
        top: -3rem;
        z-index: 20;
  
   }
   ${({props}) =>
   props && 
   css`
   width: 36rem;
   height: 56rem;
   border-radius: 50rem 50rem 0 0;
   margin-left: 0;

   `
};
${({small}) =>
   small && 
   css`
   width: 22rem;
   height: 22rem;
   border-radius: .6rem;

   &::before{
    top: 1.5rem;
    right: 3.2rem;
   }

   &::after{
    top: -1.2rem;
    right: 1.3rem;
   }
   `
};




`

export const SlideShow = styled.div`
  margin: 0rem auto;
  overflow: hidden;
`;

export const SlideShowSlider = styled.div`
  white-space: nowrap;
  transform: ${({ index }) => `translate3d(${-index * 100}%, 0, 0)`};
  transition: ease 1000ms;
`;

export const Slider = styled.div`
  height: 400px;
  display: inline-block;
  width: 100%;
  border-radius: 40px;
  text-align: center;

  .carousel-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const SlideDots = styled.div`
  text-align: center;
  display: none;
  .slideshowDot {
    display: inline-block;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    margin: 15px 7px 0px;
    background-color: #c4c4c4;
  }

  .slideshowDot.active {
    background-color: #6a0dad;
  }
`;
