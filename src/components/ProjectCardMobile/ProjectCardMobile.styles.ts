import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  flex: 1;
  padding-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors["background-content"]};
  gap: 1rem;
`;

export const ProjectCover = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
  object-fit: content;

  img {
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    object-fit: content;

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0 1rem;
  gap: 1rem;
  flex: 1;
  overflow-y: auto;

  p {
    font-size: 1rem;
    text-align: justify;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
`;

export const ProjectFooter = styled.div`
  width: 100%;
  height: 3rem;
  padding: 0 1rem;

  //animation slide up
  animation: slideUp 0.5s ease-in-out;
  animation-fill-mode: both;

  @keyframes slideUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const CardLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;

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

export const MoreDetails = styled.div`
  border-radius: 8px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 2rem;
    width: 100%;
    border-radius: 8px;
    outline: none;
    border: solid 2px ${({ theme }) => theme.colors["text"]};
    background: transparent;
    color: ${({ theme }) => theme.colors["text"]};
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors["purple-500"]};
    }
  }
`;
