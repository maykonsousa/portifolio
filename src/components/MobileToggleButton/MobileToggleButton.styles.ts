import styled from "styled-components";

export const MobileToggleContainer = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  border: none;
  cursor: pointer;
  height: 3rem;
  width: 3rem;

  @media (min-width: 849px) {
    display: none;
  }
`;
