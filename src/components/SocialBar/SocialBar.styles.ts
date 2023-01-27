import styled from "styled-components";

export const SocialBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  min-height: 100%;
  gap: 1rem;
  div {
    width: 0.25rem;
    height: 5rem;
    background-color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 849px) {
    display: none;
  }
`;
