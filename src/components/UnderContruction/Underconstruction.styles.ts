import styled from "styled-components";

export const UnderContructionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s ease-in-out;

  //animation slide botton to top
  animation: slide 0.5s ease-in-out;
  @keyframes slide {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  img {
    width: 100%;
    svg {
      fill: ${({ theme }) => theme.colors["purple-500"]};
    }
  }
  h1 {
    font-size: 4rem;
  }

  p {
    font-size: 2rem;
  }
`;