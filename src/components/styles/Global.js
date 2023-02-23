import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
    * {
      box-sizing: border-box;
    }
    body {
      background: ${({ theme }) => theme.colors.body};
      color: hsl(192, 100%, 9%);
      font-family: 'Merriweather', serif;
      font-size: 1.15rem;
      margin: 0;
    }
    p {
      opacity: 0.6;
      line-height: 1.35;
    }
    img {
      max-width: 100%;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      p {
        opacity: 0.8;
        line-height: 1.2;
        font-size: 0.8rem;
      }
    }
`;

export default GlobalStyles;
