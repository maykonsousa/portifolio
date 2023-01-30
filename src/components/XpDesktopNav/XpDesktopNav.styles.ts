import { HtmlHTMLAttributes } from "react";
import styled from "styled-components";

interface ExperienceItemProps extends HtmlHTMLAttributes<HTMLUListElement> {
  active: boolean;
}

export const XpDesktopNavContainer = styled.div`
  //mobile
  @media (max-width: 768px) {
    display: none;
  }

  margin-top: 2rem;
  display: flex;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 3fr;
  height: 100%;
  width: 100%;

  //tablet
  @media (max-width: 1024px) {
    grid-template-columns: 3fr 5fr;
  }

  > * {
    background-color: ${({ theme }) => theme.colors["background-content"]};
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const ExperiencesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 100%;
  gap: 0.5rem;

  //animate keyframes
  animation: 1s ease-in-out 0s 1 slideInFromLeft;
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const ExperienceItem = styled.li<ExperienceItemProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-left: solid 3px transparent;
  border-bottom: 1px solid ${({ theme }) => theme.colors["zinc-700"]};
  padding: 0.5rem 1rem;
  cursor: pointer;

  ${({ active, theme }) =>
    active &&
    `
        border-left: solid 3px ${theme.colors["purple-500"]};
    `}

  &:hover {
    background-color: ${({ theme }) => theme.colors["zinc-700"]};
  }
`;

export const ExperienceDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;

  //animate keyframes
  animation: 1s ease-in-out 0s 1 slideInFromRight;
  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  small {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors["zinc-500"]};
  }
  > p {
    margin-top: 1rem;
    overflow-wrap: break-word;
    text-align: justify;
  }

  ul {
    margin-top: 2rem;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    li {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      border: solid 2px ${({ theme }) => theme.colors["purple-500"]};
      cursor: pointer;
      width: 8rem;
      font-weight: bold;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      &:hover {
        background-color: ${({ theme }) => theme.colors["purple-500"]};
        color: ${({ theme }) => theme.colors["zinc-100"]};
      }
    }
  }
`;
