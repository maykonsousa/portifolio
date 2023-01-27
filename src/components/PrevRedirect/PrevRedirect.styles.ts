import styled from "styled-components";

export const PrevContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  margin-bottom: 1rem;
  width: 100%;
  background: none;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors["purple-500"]};

  &:hover {
    background-color: rgba(82, 82, 91, 0.1);
    svg {
      opacity: 1;
    }
  }

  svg {
    width: 2rem;
    height: 2rem;
    opacity: 0.5;
  }
`;
