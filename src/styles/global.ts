//create a global style
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

   html {
    
    @media (max-width: 1080px) {
        font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
        font-size: 87.5%; //14px
    }


   }

    body {
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        -webkit-font-smoothing: antialiased;
        font-family: 'Roboto', sans-serif;
        


    }
    ::-webkit-scrollbar {
   width: 10px;
   background-color: ${({ theme }) => theme.colors["background-content"]};
}

::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.colors["purple-500"]};

  &:hover {
    background-color: ${({ theme }) => theme.colors["purple-600"]};
  }
}




    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    a {
        text-decoration: none;
        color: inherit;

        &:hover {
            color: ${({ theme }) => theme.colors["link-hover"]};
        }
    }

    

`;
