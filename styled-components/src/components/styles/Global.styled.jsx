import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
     * {
      box-sizing: border-box;
    }

    body {
      background: ${(props) => props.theme.colors.body};
      color: hsl(192, 100%, 9%);
      font-family: 'Poppins', sans-serif;
      font-size: 1.15em;
      margin: 0;
    }

    p {
      opacity: 0.6;
      line-height: 1.5;
    }

    img {
      max-width: 100%;
  }
`;
