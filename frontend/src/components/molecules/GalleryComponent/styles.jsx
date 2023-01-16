import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 2rem 10rem 10rem calc(10rem - 3.2rem);
    height: auto;

    .GalleryWrapper{
        display: flex;
        flex-direction: column;
        gap: 7rem;
        margin-block: 5rem;
    }

    p{
       text-align: center;
       font-size: 2.0rem;
       text-decoration: underline;
      
    }
`
export const Row = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    justify-content: center;
    gap: 2rem;
`
export const ImgWrapper = styled.div`

    img{
        width: 22rem;
        height: 22rem;
        object-fit: cover;
    border-radius: .6rem;

    }
    
`