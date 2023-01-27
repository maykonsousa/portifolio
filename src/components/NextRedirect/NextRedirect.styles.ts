import styled from "styled-components";

export const NextContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  margin-top: 1rem;
  width: 100%;
  background: none;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors["purple-500"]};

  &:hover {
    background-color: rgba(82, 82, 91, 0.1);
    color: ${({ theme }) => theme.colors["purple-600"]};
    svg {
      opacity: 1;
    }
  }

  svg {
    width: 2rem;
    height: 2rem;
    fill: ${({ theme }) => theme.colors["purple-500"]};
    opacity: 0.5;
  }
`;
