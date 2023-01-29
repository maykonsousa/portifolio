import styled from "styled-components";

export const TechButtonContainer = styled.li`
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
`;
