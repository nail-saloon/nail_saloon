import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import { FONTSIZES } from "../../../constants/fonts";

export const Wrapper = styled.div`
    width: 100%;
    padding: 0 10rem 10rem;
    color: ${COLORS.xiketic};


    p{
        font-size: ${FONTSIZES.base}
    }
   
    div{
        padding-block: 1rem;
    }
   
`
export const ServicesFlex = styled.div`
    display: flex;
    justify-content: space-between;


    img{
        width: 33rem;
        height: 50rem;
        object-fit: contain;
    }
`