import styled from "styled-components";

export const AboutPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 1rem;
  height: 100%;
  width: 100%;

  //animate keyframes

  @media (max-width: 849px) {
    grid-template-columns: 1fr;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 1rem;
  }
`;

export const AboutContent = styled.div`
  flex-direction: column;
  gap: 1rem;

  p {
    text-align: justify;
  }
  animation: 3s ease-in-out 0s 1 fadeContent;

  @keyframes fadeContent {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const AboutImage = styled.div`
  animation: 2s ease-in-out 0s 1 fadeImage;
  @keyframes fadeImage {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  img {
    border-radius: 50%;
    align-self: center;
    border: solid 2px ${({ theme }) => theme.colors["zinc-600"]};
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
`;

export const TechContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  list-style: none;
  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: solid 2px ${({ theme }) => theme.colors["purple-500"]};
    padding: 0.3rem 0.5rem;
    width: 7rem;
    font-weight: bold;

    &:hover {
      background: ${({ theme }) => theme.colors["purple-500"]};
    }
  }
`;
