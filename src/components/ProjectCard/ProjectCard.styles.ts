import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  transition: 2s;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  min-height: 28vh;
  border-radius: 8px;
  transition: 0.6s;

  &:hover .front {
    transform: rotateY(180deg);
    transition: 0.6s;
  }

  &:hover .back {
    transform: rotateY(0deg);
    transition: 0.6s;
  }
  > div {
    position: relative;
    transition: 0.6s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    padding: 2rem;
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
    }

    &.back {
      transform: rotateY(180deg);
      background-color: ${({ theme }) => theme.colors["purple-500"]};
      transition: 0.6s;
    }
  }
`;
