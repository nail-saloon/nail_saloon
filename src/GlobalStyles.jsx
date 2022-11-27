import { createGlobalStyle } from 'styled-components';
import { COLORS } from './constants/colors';


const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');


    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        background: ${COLORS.Verve};

    }

    html {
        font-size: 62.5%;
    }

    body {
        color: inherit;
  
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${COLORS.white};
        border-radius: 5px;
    }
    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    ::-webkit-scrollbar-track {
        background-color: ${COLORS.xiketic};
    }
`;

export default GlobalStyle;
