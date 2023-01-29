import styled from "styled-components";

export const TechButtonContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: solid 2px ${({ theme }) => theme.colors["purple-500"]};
  padding: 0.3rem 0.5rem;
  width: 7rem;
  font-weight: bold;

  //mobile
  @media (max-width: 768px) {
    width: 6rem;
    font-size: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      display: none;
    }
  }

  &:hover {
    background: ${({ theme }) => theme.colors["purple-500"]};
  }
`;
