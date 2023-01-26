import styled from "styled-components";

export const EmailBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
  a {
    display: block;
    text-orientation: mixed;
    writing-mode: vertical-rl;

    font-weight: bold;
  }
  div {
    width: 0.25rem;
    height: 5rem;
    background-color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 720px) {
    display: none;
  }
`;
