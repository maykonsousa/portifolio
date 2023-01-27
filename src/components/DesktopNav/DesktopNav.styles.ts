import styled from "styled-components";

export const DesktopNavContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  gap: 2rem;
  font-weight: bold;

  @media (max-width: 849px) {
    display: none;
  }

  li {
    border-bottom: solid transparent 3px;
    padding-bottom: 0.5rem;

    &.active {
      border-color: ${({ theme }) => theme.colors["purple-500"]};
    }

    a {
      &:hover {
        text-decoration: none;
      }
    }
  }
`;
