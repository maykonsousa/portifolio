import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  transition: 2s;
  transform-style: preserve-3d;
  width: 100%;
  padding-bottom: 56.25%;
  border-radius: 8px;
  transition: 0.6s;
  overflow-y: auto;
  position: relative;

  > div {
    transition: 0.6s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    position: absolute;
    border: 2px solid ${({ theme }) => theme.colors["purple-500"]};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 50px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(0, 0, 0, 0.35) 0px -2px 6px 0px inset;

    &.front {
      z-index: 2;
      background-color: ${({ theme }) => theme.colors["background-content"]};
      transition: 0.6s;
      overflow: hidden;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &.back {
      transform: rotateY(180deg);
      background-color: ${({ theme }) => theme.colors["background-content"]};
      transition: 0.6s;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem 2rem;
      gap: 0.5rem;
      > div.header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
          cursor: pointer;

          &:hover {
            color: ${({ theme }) => theme.colors["purple-500"]};
          }
        }
      }

      ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      }
    }
  }
  &.flipped .back {
    transform: rotateY(0deg);
  }

  &.flipped .front {
    transform: rotateY(180deg);
  }
`;

export const CardLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 8px;
    border: solid 2px ${({ theme }) => theme.colors["text"]};
    color: ${({ theme }) => theme.colors["text"]};
    background-color: transparent;

    @media (max-width: 1280px) {
      padding: 0.2rem 0.5rem;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 8px;
    border: solid 2px ${({ theme }) => theme.colors["text"]};

    @media (max-width: 1280px) {
      padding: 0.2rem 0.5rem;
    }

    &:hover {
      border: solid 2px ${({ theme }) => theme.colors["purple-500"]};
    }
  }
`;
