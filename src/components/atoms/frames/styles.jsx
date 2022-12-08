import styled, {css} from "styled-components";

export const FrameImg = styled.div`
    width: 46rem;
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

`